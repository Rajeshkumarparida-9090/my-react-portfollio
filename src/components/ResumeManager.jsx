import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUpload, FiX, FiFile, FiCheck, FiTrash2, FiDownload } from 'react-icons/fi'
import { toast } from 'react-toastify'

export default function ResumeManager({ onClose }) {
  const [dragging, setDragging] = useState(false)
  const [uploaded, setUploaded] = useState(!!localStorage.getItem('portfolio_resume'))
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const fileRef = useRef()

  const processFile = (file) => {
    if (!file) return
    if (file.type !== 'application/pdf') {
      toast.error('Please upload a PDF file only.')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be under 5 MB.')
      return
    }

    setUploading(true)
    setProgress(0)

    const reader = new FileReader()
    reader.onprogress = (e) => {
      if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 80))
    }
    reader.onload = (e) => {
      setProgress(90)
      try {
        localStorage.setItem('portfolio_resume', e.target.result)
        localStorage.setItem('portfolio_resume_name', file.name)
        setProgress(100)
        setTimeout(() => {
          setUploading(false)
          setUploaded(true)
          toast.success('Resume uploaded successfully!')
        }, 400)
      } catch {
        toast.error('Storage full. Try a smaller file.')
        setUploading(false)
      }
    }
    reader.onerror = () => {
      toast.error('Failed to read file.')
      setUploading(false)
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    processFile(file)
  }

  const handleFileInput = (e) => processFile(e.target.files[0])

  const handleDelete = () => {
    localStorage.removeItem('portfolio_resume')
    localStorage.removeItem('portfolio_resume_name')
    setUploaded(false)
    toast.info('Resume removed.')
  }

  const handleDownload = () => {
    const data = localStorage.getItem('portfolio_resume')
    if (!data) return
    const name = localStorage.getItem('portfolio_resume_name') || 'Rajesh_Resume.pdf'
    const link = document.createElement('a')
    link.href = data
    link.download = name
    link.click()
  }

  const storedName = localStorage.getItem('portfolio_resume_name') || 'resume.pdf'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-lg glass-card rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                <FiUpload size={18} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Resume Manager</h2>
                <p className="text-xs text-gray-500">Upload your CV (PDF, max 5 MB)</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <FiX size={18} />
            </button>
          </div>

          <div className="p-6 space-y-5">
            {uploaded ? (
              /* Uploaded state */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                    <FiFile size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <FiCheck size={14} className="text-green-400 flex-shrink-0" />
                      <p className="text-sm font-medium text-white truncate">{storedName}</p>
                    </div>
                    <p className="text-xs text-green-400 mt-0.5">Resume is live on your portfolio</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 py-2.5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 rounded-xl text-sm transition-all"
                  >
                    <FiDownload size={14} /> Preview/Download
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDelete}
                    className="flex items-center justify-center gap-2 py-2.5 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl text-sm transition-all"
                  >
                    <FiTrash2 size={14} /> Remove Resume
                  </motion.button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Want to update? Remove current resume and upload a new one.
                </p>
              </motion.div>
            ) : (
              /* Upload state */
              <>
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-200 ${
                    dragging
                      ? 'border-cyan-400 bg-cyan-500/10'
                      : 'border-white/15 hover:border-cyan-500/40 hover:bg-white/[0.02]'
                  }`}
                >
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileInput}
                  />
                  <motion.div
                    animate={{ y: dragging ? -4 : 0 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-colors ${
                      dragging ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-gray-500'
                    }`}>
                      <FiUpload />
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        {dragging ? 'Drop to upload' : 'Drag & drop your CV here'}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        or <span className="text-cyan-400">browse files</span>
                      </p>
                    </div>
                    <p className="text-xs text-gray-600">PDF only • Max 5 MB</p>
                  </motion.div>
                </div>

                {uploading && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Uploading...</span>
                      <span className="text-cyan-400 font-medium">{progress}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="pt-2 border-t border-white/5">
              <p className="text-xs text-gray-600 text-center">
                Resume is stored in your browser. It will be downloadable from the navbar.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
