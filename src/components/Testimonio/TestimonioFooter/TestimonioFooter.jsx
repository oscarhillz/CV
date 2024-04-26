import './TestimonioFooter.css'

export default function TestimonioFooter({nombre, cargo}) {
return (
    <>
    <div className="TestimonioFooter">
        <div className="TestimonioFooterText">
            <h3>{nombre}</h3>
            <h4>{cargo}</h4>
        </div>
    </div>
    </>
);
}