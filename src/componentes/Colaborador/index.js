
import './Colaborador.css';
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

const Colaborador = (props) => {

const {foto, nombre, puesto, id, fav} = props.colaboradores;
const {colorFondo, eliminarColaborador, actualizarFav} = props;

const colorTarjeta = {backgroundColor: colorFondo};

    return <div className='colaborador'>
            <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)} />
            <div className='encabezado' style={colorTarjeta}>
                <img src={foto} alt={nombre}/>
            </div>
            <div className='info'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <AiFillHeart color='red' onClick={() => actualizarFav(id)}/> : <AiOutlineHeart onClick={() => actualizarFav(id)}/>}
                
            </div>
        </div>
}

export default Colaborador