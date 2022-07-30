export default function Card(props) {
    const{image,titulo,precio}=props;

    return (
        <div className='col-xs-10 col-sm-6 col-md-4 product'>
            <div className='cardregistro'>
                <div>{image} </div>
                <h4>{titulo}</h4>
                <p>${precio}</p>
                <button className="addcar">Agregar al carrito</button>
            </div>
        </div>

    )
}