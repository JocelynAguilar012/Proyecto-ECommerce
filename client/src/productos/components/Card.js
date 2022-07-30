import c1 from '../../assets/catalogo/1.png';
import PageWrapper from './PageWrapper';

export default function Card(props) {
    return (
        <div className='col-xs-10 col-sm-6 col-md-4 product'>
            <div className='card'>
                <div>{props.imagen} </div>
                <h4>{props.titulo}</h4>
                <p>${props.precio}</p>
                
            </div>
        </div>

    )
}