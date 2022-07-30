
export default function (props) {

  return (
    <>
      <div className='contenedor'>
        <div className='item' id='logo'>
        </div>
        <div className='item' id='cardbanner'>
        </div>
      </div>

      <div className='catalogue'>
        <div className='row center-xs'>

          {props.children}

        </div>
      </div>
    </>
  )
}