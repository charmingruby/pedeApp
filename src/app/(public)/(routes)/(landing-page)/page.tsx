/**
 * External
 */
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Headphones,
} from 'lucide-react'
import Image from 'next/image'

/**
 * Internal
 */
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Title } from '@/components/title'
import { Services } from './_components/services'
import {
  HeadingAnnotation,
  HeadingContentWrapper,
  HeadingDescription,
  HeadingTitle,
  HeadingWrapper,
} from '@/components/ui/heading'
import { FAQsAccordion } from './_components/faq-accordion'
import { ContainerWrapper } from '@/components/ui/container-wrapper'
import { Features } from './_components/features'
import { USP } from './_components/usp'
import { TextHighlight } from '@/components/text-highlight'
import { DepositionItem } from './_components/deposition-item'
import { Separator } from '@/components/ui/separator'
import { SectionsDivider } from '@/components/sections-divider'
import heroImg from '@/assets/img/heros/home.png'
import { ServicesTypewriter } from './_components/services-typewriter'
import { staticSEO } from '@/components/seo/static'
import { CreateRequestLink } from './_components/create-request-link'
import { CTAWithRequestForm } from '@/components/cta-with-request-form'
import { UseCasesAccordion } from './_components/use-cases-accordion'
import { RedirectLink } from '@/components/redirect-link'
import { HeroPattern } from './_components/hero-pattern'
import serviceImg from '@/assets/img/services/brand.png'
import useCasesImg from '@/assets/img/photos/use-cases.jpg'
import Link from 'next/link'

export const metadata = staticSEO({
  rawTitle: 'Desenvolvimento sob demanda de Software',
  description:
    'Transformamos ideias em realidade digital. Somos uma software house dedicada a criar soluções personalizadas e inovadoras para atender às necessidades únicas do seu negócio.',
})

export default function Home() {
  return (
    <>
      <div className="relative h-full w-full ">
        <HeroPattern />

        {/* Hero */}
        <section className="container pt-20 md:pt-28 flex flex-col lg:justify-center ">
          <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center pt-12 lg:pt-16 xl:pt-24">
            <div className="flex flex-col items-center gap-6 lg:gap-12">
              {/* Heading */}
              <div className="space-y-2">
                <h1 className="m-0 whitespace-pre-wrap text-center font-extrabold leading-tight tracking-tight text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Desenvolvimento sob demanda de
                </h1>
                <ServicesTypewriter />
              </div>

              {/* Description */}
              <p className="mx-auto max-w-[60ch] text-center text-sm font-medium text-muted-foreground md:text-lg">
                Transformamos ideias em realidade digital. Somos uma software
                house dedicada a criar soluções{' '}
                <TextHighlight className="text-foreground">
                  personalizadas
                </TextHighlight>{' '}
                e inovadoras para atender às necessidades únicas do seu negócio.
              </p>
            </div>

            {/* Buttons group */}
            <div className="flex items-center justify-center gap-2 md:gap-4 w-full">
              {/* Form link */}
              <div className="flex w-full md:w-fit flex-1 justify-end">
                <CreateRequestLink />
              </div>

              {/* Contact link */}
              <div className="flex flex-1  justify-start">
                <RedirectLink url="/contato">
                  <Button variant="ghost" className="text-muted-foreground ">
                    Fale conosco
                  </Button>
                </RedirectLink>
              </div>
            </div>
          </div>
        </section>

        {/* Illustration */}
        <ContainerWrapper className="flex justify-center pb-0 pt-12">
          <Image
            src={heroImg}
            alt="Página de Dashboard"
            className="w-[80%]"
            quality={100}
            priority
          />
        </ContainerWrapper>

        {/* USP */}
        <ContainerWrapper>
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
            <div className="lg:col-span-3">
              <HeadingWrapper className="mb-0">
                <HeadingAnnotation annotation="Plataforma feita para o cliente" />
                <HeadingContentWrapper>
                  <HeadingTitle>Desenvolvemos juntos de você</HeadingTitle>
                  <HeadingDescription>
                    Queremos que você se sinta confortável ao fazer um pedido.
                    Para isso, mantemos você sempre atualizado sobre o
                    desenvolvimento do seu produto. Isso garante que suas
                    necessidades sejam atendidas de maneira personalizada,
                    enquanto você está totalmente informado sobre o processo.{' '}
                  </HeadingDescription>
                </HeadingContentWrapper>
              </HeadingWrapper>
            </div>
            <div className="flex w-full md:justify-end items-end">
              <CreateRequestLink />
            </div>
          </div>

          <USP />
        </ContainerWrapper>

        {/* Services */}
        <ContainerWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border border-border rounded relative w-full h-64 lg:h-auto order-last lg:order-first">
            <Image
              src={serviceImg}
              alt="imagem dos serviços"
              className="absolute bottom-0 left-0 h-full rounded w-full object-cover"
            />
          </div>

          <div>
            <HeadingWrapper>
              <HeadingAnnotation annotation="Com o que trabalhamos" />
              <HeadingContentWrapper>
                <HeadingTitle>
                  Nossos <TextHighlight>serviços</TextHighlight>
                </HeadingTitle>
                <HeadingDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt laborum minus, aspernatur et hic optio, cumque ipsa
                  ex quos sapiente perferendis nam totam possimus fuga quaerat,
                  ut suscipit molestias culpa.
                </HeadingDescription>
              </HeadingContentWrapper>
            </HeadingWrapper>

            <Services />

            <Button className="mt-6 w-full lg:w-fit" asChild>
              <Link prefetch={false} href="/">
                Fazer pedido
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </ContainerWrapper>

        {/* Features */}
        <ContainerWrapper>
          <div className="flex flex-col">
            {/* Presentation */}
            <div className="flex flex-col lg:text-center lg:items-center">
              <HeadingWrapper className="flex flex-col lg:items-center">
                <HeadingAnnotation annotation="Por que confiar na apperize?" />
                <HeadingContentWrapper>
                  <HeadingTitle>
                    Diferenciais que você encontra na{' '}
                    <TextHighlight> apperize</TextHighlight>
                  </HeadingTitle>
                  <HeadingDescription className="lg:max-w-2xl lg:mx-auto">
                    Nosso compromisso é entregar soluções de software altamente
                    personalizadas, perfeitamente adaptadas às particularidades
                    do seu negócio.
                  </HeadingDescription>
                </HeadingContentWrapper>
              </HeadingWrapper>
            </div>

            <Features />
          </div>
        </ContainerWrapper>

        {/* Use Cases */}
        <ContainerWrapper>
          <HeadingWrapper className="lg:text-center flex flex-col lg:items-center">
            <HeadingAnnotation annotation="Casos de uso" />
            <HeadingContentWrapper>
              <HeadingTitle>
                Design moldado para o que voce precisa
              </HeadingTitle>
              <HeadingDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                eligendi, laudantium minima illo adipisci libero perspiciatis
                quam fugit iure odit nesciunt, quos laborum. Dolorum, id. Ea
                perspiciatis accusantium quia vel.
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <div className="grid grid-cols-2 gap-12">
            <div className="relative">
              <Image
                src={useCasesImg}
                alt="imagem de casos de uso"
                className="absolute h-full"
              />
            </div>
            <div>
              <UseCasesAccordion />
            </div>
          </div>
        </ContainerWrapper>

        {/* Recents works */}
        <ContainerWrapper>
          <h1>todo: recent works</h1>
        </ContainerWrapper>

        {/* Evaluations */}
        <section className="border-y border-background-alt-dark bg-background-alt">
          <ContainerWrapper className="py-10 lg:py-10">
            {/* Heading */}
            <div className="lg:w-1/2">
              <Title title="Depoimentos" />
              <strong className="text-4xl lg:text-5xl font-semibold leading-tight block text-foreground">
                O que nossos clientes dizem sobre nós:
              </strong>
            </div>

            {/* Depositions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 w-full">
              <div className="mt-12 space-y-6">
                <DepositionItem />
                <Separator />
                <DepositionItem />
              </div>

              <div className="block lg:hidden my-6">
                <Separator />
              </div>

              <div className="space-y-6">
                <DepositionItem />
                <Separator />
                <DepositionItem />
              </div>
            </div>
          </ContainerWrapper>
        </section>

        {/* FAQ */}
        {/* TODO: change cta with the contact cta */}
        <ContainerWrapper className="flex flex-col lg:items-center max-w-4xl w-full">
          <HeadingWrapper>
            <HeadingContentWrapper className="lg:text-center">
              <HeadingTitle>Ficou com dúvidas? Não se preocupe</HeadingTitle>
              <HeadingDescription>
                Tudo que o que voce precisa de saber sobre o serviço e a
                cobrança
              </HeadingDescription>
            </HeadingContentWrapper>
          </HeadingWrapper>

          <FAQsAccordion />
        </ContainerWrapper>

        {/* Contact */}
        <ContainerWrapper className="flex items-center justify-center bg-background-alt border border-background-alt-dark rounded-xl py-10 lg:py-10">
          <div className="max-w-xl flex flex-col items-center justify-center text-center">
            <Headphones className="text-primary h-12 w-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-6">Entre em contato</h2>
            <Text
              className="mb-8 leading-normal"
              variant="lowOpacity"
              size="md"
            >
              Estamos aqui para ajudar. Entre em contato para suporte técnico
              personalizado em nossos produtos e serviços.
            </Text>

            <div className="flex flex-col md:flex-row md:justify-center gap-4 w-full">
              <RedirectLink url="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base w-full lg:w-fit"
                >
                  Whatsapp
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </RedirectLink>

              <RedirectLink url="/contato">
                <Button className="text-base w-full lg:w-fit" size="lg">
                  Fale conosco
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </RedirectLink>
            </div>
          </div>
        </ContainerWrapper>
        <SectionsDivider />

        <CTAWithRequestForm />
      </div>
    </>
  )
}
