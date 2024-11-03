type Props = {
    title: string
    desc: string
}

const CommonHeader = ({title, desc}: Props) => {
  return (
    <>
    <h1 className="text-30">{title}</h1>
      <p className="">{desc}</p>
    </>
  )
}

export default CommonHeader