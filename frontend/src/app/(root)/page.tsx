import { Button } from '@/components/ui/button'
import { ArrowRight, Lightbulb, RefreshCcw } from 'lucide-react'
import { ValueCard } from './components/value-card'
import { FeatureItem } from './components/feature-item'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container pt-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-8">
            <h1 className="m-0 font-bold text-5xl text-center">
              Transforme sua ideia em um{' '}
              <span className="text-primary">Software</span>.
            </h1>
            <p className="text-muted-foreground text-center leading-relaxed text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              reiciendis obcaecati quas rerum ullam quis impedit. Sapiente sequi
              adipisci temporibus velit, animi ab autem dolor, quo, similique
              nihil tempora amet!
            </p>
          </div>
          <div className="flex gap-4">
            <Button>Faça seu pedido</Button>
            <Button variant="outline" className="flex items-center gap-1">
              <span>Produtos</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="container pt-16">
        <div className="mb-12 grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <div className="w-fit space-y-4 mb-6 ">
              <span className="text-primary uppercase tracking-widest font-semibold block">
                Plataforma feita para o cliente
              </span>
              <div className="w-1/6 h-0.5 bg-primary" />
            </div>
            <strong className="leading-relaxed text-4xl font-semibold">
              Traga sua ideia e nós a tornaremos realidade.
            </strong>
          </div>
          <div className="flex justify-end items-end">
            <Button>Fale conosco</Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <ValueCard
            icon={Lightbulb}
            title="Ideia"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
            position={0}
          />
          <ValueCard
            icon={Lightbulb}
            title="Ideia"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
            position={1}
          />
          <ValueCard
            icon={Lightbulb}
            title="Ideia"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
            position={2}
          />
          <ValueCard
            icon={Lightbulb}
            title="Ideia"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
            position={3}
          />
        </div>
      </section>

      {/* Featured */}
      <section className="container pt-20">
        <div className="w-fit space-y-4 mb-6 ">
          <span className="text-primary uppercase tracking-widest font-semibold block">
            Visualização do progresso
          </span>
          <div className="w-1/6 h-0.5 bg-primary" />
        </div>
        <div className="grid grid-cols-2">
          <strong className="font-semibold text-4xl">
            Tenha acesso ao andamento do seu projeto
          </strong>
        </div>
      </section>

      {/* Features */}
      <section className="container pt-20">
        {/* Presentation */}
        <div className="mx-auto text-center mb-12 flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">
            Funcionalidades para melhorar sua{' '}
            <strong className="text-primary">experiência</strong>
          </h2>
          <p className="text-muted-foreground text-lg">
            Algumas de nossas funcionalidades que vao ajudar te integrar na
            criação do seu serviço.
          </p>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-3 gap-8">
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
          <FeatureItem
            icon={RefreshCcw}
            title="Atualização em tempo real"
            description="Mantenha-se atualizado com o andamento do seu serviço"
          />
        </div>
      </section>

      {/* Conclusion */}
      <section className="container">Conclusion</section>

      {/* CTA */}
      <section className="container mt-20 bg-primary rounded">CTA</section>
    </>
  )
}
