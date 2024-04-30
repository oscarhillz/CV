import './TestimonioFooter.css'

export default function TestimonioFooter({nombre, cargo}) {
return (
    <>
    <div className="TestimonioFooter">
        <div className="TestimonioFooterText">
            <p>{nombre}</p>
            <p>{cargo}</p>
        </div>
    </div>
    </>
);
}