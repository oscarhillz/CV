import './Technology.css'


export default function Technology({titulo, listaIconos, listaNombreIconos}) {
return (
    <div className="Technology">
        <h3>{titulo}</h3>
        <div className="TechnologyContainer">
            {listaIconos.map((icono, index) => (
                <div key={index}>
                    {icono}
                    <p>{listaNombreIconos[index]}</p>
                </div>
            ))}
        </div>
    </div>
);
}