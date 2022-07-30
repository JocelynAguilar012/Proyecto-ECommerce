
export default function (props) {

    return (
        <>
         <div className='contenedorregistro'>
        <div className='itemregistro' id='logoregistro'>
          
        </div>
        <div className='itemregistro' id='cardbannerregistro'>
          <button className='button'>Buy Now</button>
        </div>
      </div>

      <div className='catalogueregistro'>
        <div className='row center-xs'>
         
            {props.children}
          
        </div>
      </div>
        </>
    )
}