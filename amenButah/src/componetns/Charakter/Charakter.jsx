import './cha.css'

const ChaCard = props=> {

  return (
    <>
      <div className='div'>
        <h3 className='h3'>{props.name}</h3>
        <img src={props.img} alt="{props.img}" />
        <p className='p'>Name: {props.name}</p>
        {/* <br /> */}
        <p className='p'>Age: {props.age}</p>
        {/* <br /> */}
        <p className='p'>Job: {props.job}</p>
        <p className='p'>Rank: {props.rank}</p>
      </div>
    </>
  )
}

export default ChaCard
