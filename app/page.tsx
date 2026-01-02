"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Shield,
  Wrench,
  CheckCircle2,
  Instagram,
  ChevronRight,
  Sparkles,
  FileCheck,
  Building2,
  Zap,
  Users,
  ArrowRight,
  Download,
} from "lucide-react"

// WhatsApp SVG Icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = `Hola, mi nombre es ${formData.name}.%0A%0ATeléfono: ${formData.phone}%0AEmail: ${formData.email}%0A%0AMensaje: ${formData.message}`

    window.open(`https://wa.me/5491154565779?text=${text}`, "_blank")

    setFormStatus("success")
    setTimeout(() => {
      setFormStatus("idle")
      setFormData({ name: "", phone: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/logo-ascensores-tecnics-2.png"
                alt="Ascensores Tecnic's Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Por qué nosotros
              </button>
              <button
                onClick={() => scrollToSection("cobertura")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Cobertura
              </button>
              <button
                onClick={() => scrollToSection("normativas")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Normativas
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://wa.me/5491154565779", "_blank")}
                className="gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Contacto
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Por qué nosotros
                </button>
                <button
                  onClick={() => scrollToSection("cobertura")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Cobertura
                </button>
                <button
                  onClick={() => scrollToSection("normativas")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Normativas
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://wa.me/5491154565779", "_blank")}
                    className="gap-2 w-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                  <Button onClick={() => (window.location.href = "tel:1154565779")} className="gap-2 w-full">
                    <Phone className="w-4 h-4" />
                    Llamar Ahora
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                Atención 24/7 • 365 días
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Mantenimiento y Reparación de Ascensores en CABA
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                Atención clara, rápida y profesional. Guardia 24/7 para emergencias.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" onClick={() => scrollToSection("contacto")} className="gap-2 text-base">
                  Solicitar Presupuesto
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://wa.me/5491154565779", "_blank")}
                  className="gap-2 text-base"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp 24/7
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border">
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Permiso de Conservador GCBA</p>
                    <p className="text-xs text-muted-foreground">N° 152</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border">
                  <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Técnicos Matriculados</p>
                    <p className="text-xs text-muted-foreground">Personal calificado</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Atención 24/7</p>
                    <p className="text-xs text-muted-foreground">Guardia permanente</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/WhatsApp Image 2026-01-01 at 21.04.30.jpeg"
                  alt="Estructura interna de ascensor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluciones completas para el mantenimiento y modernización de ascensores
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Mantenimiento de Ascensores",
                description: "Mantenimiento preventivo y correctivo para garantizar el funcionamiento óptimo.",
              },
              {
                icon: Zap,
                title: "Reparaciones",
                description: "Diagnóstico y reparación rápida de fallas. Atención de emergencias 24/7.",
              },
              {
                icon: Sparkles,
                title: "Modernizaciones",
                description: "Actualización de sistemas antiguos con tecnología de última generación.",
              },
              {
                icon: Building2,
                title: "Revestimiento de Cabinas",
                description: "Renovación estética de cabinas y puertas de ascensores.",
              },
              {
                icon: Wrench,
                title: "Mantenimiento de Bombas",
                description: "Servicio técnico especializado en bombas de agua para edificios.",
              },
              {
                icon: FileCheck,
                title: "Informes y Auditorías",
                description: "Informes técnicos y auditorías para cumplimiento normativo.",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection("contacto")}
                    className="gap-2 px-0 hover:gap-3 transition-all"
                  >
                    Consultar
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="/WhatsApp Image 2026-01-01 at 21.04.31.jpeg"
                alt="Panel de control de ascensor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="/WhatsApp Image 2026-01-01 at 21.04.31 (1).jpeg"
                alt="Botonera de ascensor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="/WhatsApp Image 2026-01-01 at 21.04.31 (2).jpeg"
                alt="Técnico trabajando en panel eléctrico"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="nosotros" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por Qué Elegirnos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confianza, profesionalismo y experiencia al servicio de su edificio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Zap,
                title: "Respuesta Rápida",
                description: "Atención inmediata a emergencias con guardia 24/7 todos los días del año.",
              },
              {
                icon: Shield,
                title: "Cumplimiento Normativo",
                description: "Trabajamos bajo normativa vigente de GCBA para máxima seguridad.",
              },
              {
                icon: CheckCircle2,
                title: "Mantenimiento Preventivo",
                description: "Programas de mantenimiento que previenen averías y prolongan la vida útil.",
              },
              {
                icon: Users,
                title: "Comunicación Clara",
                description: "Trato directo con consorcios y administraciones. Informes detallados.",
              },
              {
                icon: Wrench,
                title: "Equipo Especializado",
                description: "Técnicos matriculados con amplia experiencia en todo tipo de ascensores.",
              },
              {
                icon: Clock,
                title: "Soporte Continuo",
                description: "Seguimiento permanente y atención de urgencias las 24 horas.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-muted">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Atención continua</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted">
              <div className="text-4xl font-bold text-primary mb-2">365</div>
              <div className="text-sm text-muted-foreground">Días del año</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted">
              <div className="text-4xl font-bold text-primary mb-2">N° 152</div>
              <div className="text-sm text-muted-foreground">Permiso GCBA</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted">
              <div className="text-4xl font-bold text-primary mb-2">CABA</div>
              <div className="text-sm text-muted-foreground">Cobertura total</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cómo Trabajamos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Un proceso simple y transparente</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Diagnóstico / Visita",
                description: "Evaluamos el estado del ascensor y detectamos necesidades.",
              },
              {
                step: "2",
                title: "Presupuesto Claro",
                description: "Presentamos un presupuesto detallado sin sorpresas.",
              },
              {
                step: "3",
                title: "Ejecución del Trabajo",
                description: "Realizamos el servicio con profesionalismo y eficiencia.",
              },
              {
                step: "4",
                title: "Seguimiento",
                description: "Mantenemos seguimiento continuo y asistencia post-servicio.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cobertura en CABA</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Brindamos servicios a consorcios, administraciones, edificios y comercios en toda la Ciudad Autónoma
                  de Buenos Aires.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Consorcios de edificios residenciales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Administraciones de propiedades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Edificios comerciales y oficinas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Locales y espacios públicos</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/WhatsApp Image 2026-01-01 at 21.04.32 (1).jpeg"
                  alt="Vista del interior del ascensor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section id="normativas" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Normativas y Seguridad</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trabajamos bajo normativa vigente de GCBA para garantizar la máxima seguridad
            </p>

            <Card>
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a
                    href="/docs/Ley-962.pdf"
                    download
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <FileCheck className="w-6 h-6 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">Ley N° 962</div>
                      <div className="text-xs text-muted-foreground">Normas de seguridad</div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="/docs/Ley-161.pdf"
                    download
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <FileCheck className="w-6 h-6 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">Ley N° 161</div>
                      <div className="text-xs text-muted-foreground">Habilitaciones</div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="/docs/Decreto-914.pdf"
                    download
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <FileCheck className="w-6 h-6 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">Decreto 914</div>
                      <div className="text-xs text-muted-foreground">Reglamentación técnica</div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="/docs/Decreto-952-03.pdf"
                    download
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <FileCheck className="w-6 h-6 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">Decreto 952/03</div>
                      <div className="text-xs text-muted-foreground">Normativa complementaria</div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="/docs/Resolucion-430.pdf"
                    download
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <FileCheck className="w-6 h-6 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">Resolución 430</div>
                      <div className="text-xs text-muted-foreground">Disposiciones generales</div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="/docs/Res-412-AGC-19-Anexo-General.pdf"
                    download
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <FileCheck className="w-6 h-6 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">Res. 412/AGC/19</div>
                      <div className="text-xs text-muted-foreground">Anexo General</div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="/docs/Res-412-AGC-19-Anexo-1.pdf"
                    download
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <FileCheck className="w-6 h-6 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">Res. 412/AGC/19</div>
                      <div className="text-xs text-muted-foreground">Anexo 1</div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="/docs/Res-412-AGC-19-Anexo-6.pdf"
                    download
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <FileCheck className="w-6 h-6 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">Res. 412/AGC/19</div>
                      <div className="text-xs text-muted-foreground">Anexo 6</div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="/docs/codigo-de-edificacion-LEY-LCABA-LCBA-6100-18-ANX.pdf"
                    download
                    className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors group"
                  >
                    <FileCheck className="w-6 h-6 text-primary shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-foreground">Código de Edificación</div>
                      <div className="text-xs text-muted-foreground">Ley 6100/18 - Anexo</div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo Que Dicen Nuestros Clientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Excelente servicio. Muy profesionales y atentos. Respondieron rápido a nuestra emergencia.",
                author: "María González",
                role: "Administradora de Consorcio",
              },
              {
                quote: "Trabajo prolijo y responsable. El ascensor quedó funcionando perfectamente. Los recomiendo.",
                author: "Roberto Martínez",
                role: "Encargado de Edificio",
              },
              {
                quote:
                  "Cumplieron con los plazos y el presupuesto acordado. Muy buena comunicación durante todo el proceso.",
                author: "Laura Fernández",
                role: "Administración Inmobiliaria",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contacto</h2>
            <p className="text-lg text-muted-foreground">
              Estamos disponibles 24/7 para atender sus consultas y emergencias
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Información de Contacto</h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Teléfonos</p>
                          <p className="text-sm text-muted-foreground">11 5456-5779</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Guardia 24hs</p>
                          <p className="text-sm text-muted-foreground">11 5456-5779</p>
                        </div>
                      </div>

                      <a
                        href="https://wa.me/5491154565779"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 hover:bg-muted/50 p-2 -ml-2 rounded-lg transition-colors group"
                      >
                        <WhatsAppIcon className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">WhatsApp</p>
                          <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">+54 11 5456-5779</p>
                        </div>
                      </a>

                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <p className="text-sm text-muted-foreground">info@ascensorestecnics.com.ar</p>
                          <p className="text-sm text-muted-foreground">asc.tecnics@gmail.com</p>
                        </div>
                      </div>

                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Rawson+285+CABA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 hover:bg-muted/50 p-2 -ml-2 rounded-lg transition-colors group"
                      >
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">Dirección</p>
                          <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">Rawson 285 PB "B", CABA</p>
                        </div>
                      </a>

                      <a
                        href="https://www.instagram.com/ascensores_tecnics/?hl=es-la"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 hover:bg-muted/50 p-2 -ml-2 rounded-lg transition-colors group"
                      >
                        <Instagram className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">Instagram</p>
                          <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">@ascensores_tecnics</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button
                      className="w-full gap-2"
                      onClick={() => window.open("https://wa.me/5491154565779", "_blank")}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Enviar WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full gap-2 bg-transparent"
                      onClick={() => (window.location.href = "tel:1154565779")}
                    >
                      <Phone className="w-4 h-4" />
                      Llamar Ahora
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full gap-2 bg-transparent"
                      onClick={() => (window.location.href = "mailto:info@ascensorestecnics.com.ar")}
                    >
                      <Mail className="w-4 h-4" />
                      Enviar Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Enviar Consulta</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                        Teléfono *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="11 5555-5555"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Cuéntenos sobre su consulta o necesidad..."
                      />
                    </div>

                    {formStatus === "success" && (
                      <div className="p-3 rounded-lg bg-green-50 text-green-800 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        ¡Mensaje enviado! Nos pondremos en contacto pronto.
                      </div>
                    )}

                    {formStatus === "error" && (
                      <div className="p-3 rounded-lg bg-red-50 text-red-800 text-sm">
                        Error al enviar el mensaje. Por favor, intente nuevamente.
                      </div>
                    )}

                    <Button type="submit" className="w-full gap-2">
                      Enviar Consulta
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight">Ascensores</span>
                  <span className="text-sm leading-tight">Tecnic's SRL</span>
                </div>
              </div>
              <p className="text-sm text-white/80">Servicio técnico profesional en ascensores y bombas de agua.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("nosotros")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Por qué nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("cobertura")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Cobertura
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contacto</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Tel: 11 5456-5779</li>
                <li>WhatsApp: +54 11 5456-5779</li>
                <li>info@ascensorestecnics.com.ar</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Horario</h4>
              <p className="text-sm text-white/80">
                Atención 24/7
                <br />
                365 días al año
                <br />
                Guardia permanente
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>© 2026 Ascensores Tecnic's SRL. Todos los derechos reservados.</p>
            <p>Permiso de Conservador GCBA N° 152</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open("https://wa.me/5491154565779", "_blank")}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </button>
    </div>
  )
}
