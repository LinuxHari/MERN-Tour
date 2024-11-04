import { useState } from "react"

const useModal = () => {
  const [showModal, setShowModal] = useState(false)

  const onClose = () => setShowModal(false)

  const onConfirm = (fn: Function) => {
    fn()
    setShowModal(false)
  }  

  const openModal = () => setShowModal(true)

  return {showModal, onClose, onConfirm, openModal}
}

export default useModal