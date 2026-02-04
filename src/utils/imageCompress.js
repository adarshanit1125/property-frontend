export const compressImage = (file, maxWidth = 800, quality = 0.7) => {
    return new Promise((resolve) => {
        const reader = new FileReader()

        reader.onload = (e) => {
            const img = new Image()
            img.src = e.target.result

            img.onload = () => {
                const canvas = document.createElement("canvas")
                const scale = maxWidth / img.width

                canvas.width = maxWidth
                canvas.height = img.height * scale

                const ctx = canvas.getContext("2d")
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

                const compressedBase64 = canvas.toDataURL("image/jpeg", quality)
                resolve(compressedBase64)
            }
        }

        reader.readAsDataURL(file)
    })
}
