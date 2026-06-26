export default function Services() {

    const services=[
        "Brand Identity",
        "Web Design",
        "UI / UX",
        "Development",
        "Motion Design",
        "Creative Strategy"
    ]

    return(

<section className="services">

<div className="container">

<h2 className="services-title fade-up">
Our Expertise
</h2>

<div className="services-grid">

{
services.map((item,index)=>(

<div className="service-card fade-up" key={index}>

<span>0{index+1}</span>

<h3>{item}</h3>

<p>
Beautiful digital experiences
crafted with performance,
accessibility and scalability.
</p>

</div>

))
}

</div>

</div>

</section>

)

}