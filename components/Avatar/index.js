import Image from 'next/image'

export default function Avatar() {
  return (
    <Image
      src='/images/profile.jpeg'
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt='avatar'
    />
  )
}
