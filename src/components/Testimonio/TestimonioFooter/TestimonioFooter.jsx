import './TestimonioFooter.css'

export default function TestimonioFooter({nombre, cargo}) {
return (
    <>
    <div className="TestimonioFooter">
            {/* <div className="Img" style={{backgroundImage: `url(${img})`}}></div> */}
            <div className="Text">
                    <h3>{nombre}</h3>
                    <h4>{cargo}</h4>
            </div>
    </div>
    </>
);
}