
import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const {colorPrimario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, actualizarFav} = props;

    const colorFondo = {backgroundColor: hexToRgba(colorPrimario, 0.6)};
    const estiloTitulo = {borderColor: colorPrimario};

    return <>
    { colaboradores.length > 0 &&
        <section className='equipo' style={colorFondo}>
            <input 
                type='color'
                className='input-color'
                value={colorPrimario}
                onChange={(e) => {
                    actualizarColor(e.target.value, id);
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className='colaboradores'>
            {
                colaboradores.map( (colaborador, index) => <Colaborador 
                colaboradores={colaborador}
                key={index} 
                colorFondo={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                actualizarFav={actualizarFav}
                />)
            }
            </div>
        </section>
    }
        </>
}

export default Equipo