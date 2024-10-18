
const Floaters = () => {
  return (
    <div className="hidden lg:block">
        <img 
            height={64}
            width={64}
            className="absolute right-20 top-80 floating-object"
            src="/solana1.png"
        />
        <img 
            height={64}
            width={64}
            className="absolute right-40 top-20 floating-object"
            src="/solana1.png"
        />
        <img 
            height={64}
            width={64}
            className="absolute left-60 bottom-40 floating-object"
            src="/solana1.png"
        />
        <img 
            height={64}
            width={64}
            className="absolute left-40 top-60 floating-object"
            src="/solana1.png"
        />
        <img 
            height={64}
            width={64}
            className="absolute bottom-20 right-20 floating-object"
            src="/solana1.png"
        />
    </div>
  )
}

export default Floaters