'use client'

export default function Error({error,reset}:{error:any,reset:any}) {
  return (
    <div>
      An error occured {" "}

      <button className="btn border-neutral-600" onClick={()=>reset()}>Retry</button>
    </div>
  )
}
