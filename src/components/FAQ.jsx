import React, { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: "Sobre los productos",
      questions: [
        {
          q: "¿Qué tipo de productos ofrecen?",
          a: "Ofrecemos velas y artesanías elaboradas con cera de soja 100% natural, libres de químicos agresivos, parabenos y tóxicos. Nuestros productos incluyen velas aromáticas, centros de mesa, sets decorativos y artesanías únicas."
        },
        {
          q: "¿Los productos son aptos para personas con sensibilidad a fragancias?",
          a: "Sí. Nuestras velas están elaboradas con ingredientes naturales y esencias suaves. Si tenés dudas puntuales o sensibilidad específica, podés consultarnos antes de comprar y te ayudamos a elegir el producto más adecuado."
        },
        {
          q: "¿Los productos son respetuosos con el medio ambiente?",
          a: "Sí. Priorizamos ingredientes naturales y éticos. Nuestras velas de soja son biodegradables y no contienen químicos que dañen el medio ambiente. Además, nuestros productos están pensados para ser duraderos y reutilizables."
        },
        {
          q: "¿Cómo sé qué producto me conviene según mi necesidad?",
          a: "Podés revisar la descripción de cada producto, donde detallamos sus características, aromas disponibles y duración. Si tenés dudas sobre qué producto elegir para tu espacio o necesidad específica, escribinos por WhatsApp y te asesoramos personalmente."
        }
      ]
    },
    {
      category: "Pedidos, pagos y envíos",
      questions: [
        {
          q: "¿Cómo puedo realizar un pedido?",
          a: "Podés consultar por cualquier producto haciendo clic en el botón 'Consultar por WhatsApp' de cada producto. Te responderemos con toda la información sobre disponibilidad, formas de pago y envío."
        },
        {
          q: "¿Qué métodos de pago aceptan?",
          a: "Consultá los métodos de pago disponibles escribiéndonos por WhatsApp. Te informaremos todas las opciones disponibles al momento de tu consulta."
        },
        {
          q: "¿Hacen envíos?",
          a: "Sí, realizamos envíos. Consultanos por WhatsApp para conocer las zonas de cobertura, costos y tiempos de entrega según tu ubicación."
        }
      ]
    },
    {
      category: "Cambios, devoluciones y reclamos",
      questions: [
        {
          q: "¿Qué pasa si el producto llega dañado o no es lo que esperaba?",
          a: "Si el producto llega dañado o con un problema, contactanos lo antes posible por WhatsApp con fotos para evaluar la situación. Ofreceremos una solución adecuada (cambio, devolución o reembolso) según corresponda."
        },
        {
          q: "¿Aceptan devoluciones si me arrepentí?",
          a: "Depende del caso. Si el producto ya fue usado o abierto, puede ser difícil procesar la devolución. Si querés devolverlo, escribinos antes de usarlo para que lo evaluemos y encontremos la mejor solución."
        }
      ]
    },
    {
      category: "Atención al cliente y contacto",
      questions: [
        {
          q: "¿Cómo puedo contactarlos si tengo dudas?",
          a: "Podés escribirnos por ",
          aLinks: [
            { text: "WhatsApp", href: "https://wa.me/5491122714366", target: "_blank" },
            { text: " o ", href: null },
            { text: "Instagram", href: "https://www.instagram.com/celia.cosmetica/", target: "_blank" },
            { text: ". Estamos disponibles para responder todas tus consultas y ayudarte a elegir el producto perfecto.", href: null }
          ]
        },
        {
          q: "¿Aceptan consultas antes de comprar?",
          a: "¡Sí! Si no estás seguro/a sobre qué producto elegir, querés conocer más detalles sobre aromas, colores o características, o tenés cualquier otra duda, no dudes en escribirnos. Te asesoramos sin compromiso."
        }
      ]
    }
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Preguntas Frecuentes</h2>
        
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="faq-category">
            <h3 className="faq-category-title">{section.category}</h3>
            {section.questions.map((faq, index) => {
              const globalIndex = sectionIndex * 10 + index
              return (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${openIndex === globalIndex ? 'open' : ''}`}
                    onClick={() => toggleQuestion(globalIndex)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{openIndex === globalIndex ? '−' : '+'}</span>
                  </button>
                  {openIndex === globalIndex && (
                    <div className="faq-answer">
                      <p>
                        {faq.aLinks ? (
                          <>
                            {faq.a}
                            {faq.aLinks.map((link, linkIndex) => 
                              link.href ? (
                                <a
                                  key={linkIndex}
                                  href={link.href}
                                  target={link.target || "_self"}
                                  rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                                  className="faq-link"
                                >
                                  {link.text}
                                </a>
                              ) : (
                                <span key={linkIndex}>{link.text}</span>
                              )
                            )}
                          </>
                        ) : (
                          faq.a
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ

