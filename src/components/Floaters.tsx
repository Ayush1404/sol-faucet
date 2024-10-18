
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
            className="absolute right-60 top-[8rem] floating-object"
            src="/solana1.png"
        />
        <img 
            height={64}
            width={64}
            className="absolute left-40 bottom-40 floating-object"
            src="/solana1.png"
        />
        <img 
            height={64}
            width={64}
            className="absolute left-80 top-80 floating-object"
            src="/solana1.png"
        />
        <img 
            height={64}
            width={64}
            className="absolute bottom-20 right-80 floating-object"
            src="/solana1.png"
        />
        <img 
            height={64}
            width={64}
            className="absolute top-10 left-20 floating-object"
            src="/solana1.png"
        />
    </div>
  )
}

export default Floaters