import './Technology.css'


export default function Technology({titulo, listaIconos, listaNombreIconos}) {
return (
    <div className="Technology">
        <h1>{titulo}</h1>
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