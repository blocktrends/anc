<template>
    <div class="xl:container  mx-auto" id="mentores">

        <div class="2xl:flex py-14 lg:py-24">
            <div class="flex-1 2xl:max-w-[35%]">
                <div
                    class=" inline-block text-white text-xs font-bold whitespace-nowrap justify-center items-stretch rounded border border-[color:var(--Cor-Primria-Ancord,#00A7D0)] bg-neutral-900 px-3.5 py-2 border-solid self-start">
                    MENTORES
                </div>
                <div class="text-4xl py-10 sm:text-5xl sm:leading-tight font-bold">
                    Aprenda com o <br />
                    nosso time de <br />
                    experts em Cripto
                </div>
                <div class="items-stretch flex gap-2">
                    <img src="../assets/imgs/mentores-matricular.svg" class="max-w-full md:max-w-md" alt="QUERO ME MATRICULAR AGORA" />




                </div>

            </div>
            <div class="w-full mt-28 2xl:mt-0 2xl:max-w-[65%]">
                <Carousel v-bind="settings" :breakpoints="breakpoints">
                    <slide v-for="teacher in teachers" :key="teacher.image">
                        <div class="md:flex rounded-[32px] bg-[#F0F0F0] border border-[#bebebe] carousel__item text-left mx-3">
                            <div class="flex-1 md:max-w-md pt-7 pl-4 md:pl-8">
                                <div
                                    class="text-slate-950 text-2xl font-bold leading-8 tracking-tight self-stretch whitespace-nowrap">
                                    {{ teacher.nome }}
                                </div>
                                <div
                                    class="text-cyan-500 text-xs md:text-sm font-bold leading-5 tracking-tight uppercase self-stretch whitespace-nowrap mt-2">
                                    {{ teacher.cargo }}
                                </div>
                                <div class="text-zinc-600 pr-5 sm:pr-10 text-sm leading-5 self-stretch mt-6">
                                    {{ teacher.bio }}
                                </div>
                                <div class="absolute hidden md:block bottom-8">
                                    <img :src="teacher.empresa" />
                                </div>

                            </div>

                            <div class="flex-1 mt-10 md:mt-0" dir="rtl">
                                <img :src="teacher.image" class="mobile-mentor w-full md:rounded-s-[32px] " />
                            </div>

                        </div>
                    </slide>


                    <template #addons>
                        <Navigation />
                    </template>


                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import fernandoImage from '../assets/imgs/fernando.jpg'
import fernandoEmpresa from '../assets/imgs/vortx.svg'

import theoImage from '../assets/imgs/foto-theo.jpg'
import theoEmpresa from '../assets/imgs/logo-prof-qr-asset.svg'

import carlosImage from '../assets/imgs/foto-mirandola.jpg'
import carlosEmpresa from '../assets/imgs/logo-prof-qr-capital.svg'

import muriloImage from '../assets/imgs/foto-murilo-cortina.png'
import muriloEmpresa from '../assets/imgs/logo-prof-qr-asset.svg'

import gersonImage from '../assets/imgs/foto-gerson.jpg'
import gersonEmpresa from '../assets/imgs/logo-prof-qr-asset.svg'

import nicholasImage from '../assets/imgs/foto-nicholas.jpg'
import nicholasEmpresa from '../assets/imgs/logo-prof-bt.svg'

import andersonImage from '../assets/imgs/foto-anderson.jpg'
import andersonEmpresa from '../assets/imgs/vortx.svg'



export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            teachers: [
                {
                    image: fernandoImage, id: 'fernando', nome: 'Fernando Carvalho', empresa: fernandoEmpresa,
                    cargo: 'CEO da Vórtx QR tokenizadora', bio: 'Administrador de empresas com mais de 18 anos de experiência de trabalho em empresas multinacionais. Possui MBA pela Universidade de Pittsburgh (EUA) e formação no Programa Blockchain de Oxford na Said Business School (Reino Unido). É embaixador no Brasil para o Global Blockchain Business Council e fundador da QR Capital. Atualmente é CEO da Vórtx QR Tokenizadora.'
                },
                {
                    image: theoImage, id: 'theo', nome: 'Theodoro Fleury, CFA', empresa: theoEmpresa,
                    cargo: 'Gestor da QR Asset', bio: 'Graduado em Economia pela PUC-Rio, iniciou sua carreira no Banco BBM no ano 2000, e desde então teve passagens por fundos de investimento e grandes corretoras, tanto na área de varejo quanto institucional. De 2015 a 2019 liderou a mesa de opções e derivativos da filial brasileira da Tullett Prebon, maior corretora independente do mundo, focada 100% em investidores institucionais. Desde o final de 2016 dedica-se ao estudo do Bitcoin e demais criptoativos.'
                },
                {
                    image: carlosImage, id: 'carlos', nome: 'Carlos Maurício Mirandola', empresa: carlosEmpresa,
                    cargo: 'CLO da QR Capital', bio: 'Atuou como Partner, CCO/CRO e Head of Vortx Labs and Crypto Initiatives na Vórtx DTVM entre 2017 e 2021. Sua experiência inclui também atuação significativa como General Counsel na Guepardo Investimentos, de 2013 a 2015, onde aconselhou a empresa em questões corporativas, comerciais e regulatórias. Atualmente ocupa o cargo de CLO na QR Capital.'
                },
                {
                    image: muriloImage, id: 'murilo', nome: 'Murilo Cortina', empresa: muriloEmpresa,
                    cargo: 'Business Development da QR Asset', bio: 'Atuou como Business Development na ChainLink Capital Management. Anteriormente, na Empiricus, realizou pesquisas sobre novos projetos de cripto e acompanhou uma carteira de projetos selecionados. Atualmente, está envolvido na estruturação, planejamento e distribuição de fundos e ETFs em cripto na QR Asset Management.'
                },
                {
                    image: gersonImage, id: 'gerson', nome: 'Gerson Junior, PhD', empresa: gersonEmpresa,
                    cargo: 'Analista Quantitativo da QR Asset', bio: 'Foi Pesquisador Visitante no IÉSEG - Paris (2020) e com passagem na equipe de analistas da NCH Capital. Com interesse na área de finanças, atuando principalmente nos seguintes temas: Portfolio Management, Econometria Financeira e Finanças Quantitativas. Publicou artigos em revistas internacionais: Finance Research Letters, Journal of Behavioral Finance, Applied Economics Letters.'
                },
                {
                    image: nicholasImage, id: 'nicholas', nome: 'Nicholas Sacchi', empresa: nicholasEmpresa,
                    cargo: 'Head de Estratégia e Parcerias do BlockTrends', bio: 'Economista especializado em inovação, traz no currículo a atuação em instituições como Deutsche Bank, BTG Pactual, Exame, além de corretoras de valores e exchanges de criptomoedas. Seu campo de estudo e a paixão por tecnologia o trouxeram naturalmente para os criptoativos. Hoje, se dedica a produzir conteúdo em diferentes formatos com o intuito de massificar o conhecimento sobre o tema.'
                },
                {
                    image: andersonImage, id: 'anderson', nome: 'Anderson Gabriel', empresa: andersonEmpresa,
                    cargo: 'Regulatory Specialist na Vórtx QR Tokenizadora', bio: 'Advogado, com mais de 9 anos de experiência em Regulatório, Governança Corporativa e Compliance no mercado financeiro e de capitais. Especialista em Direito Corporativo e Compliance pela Escola Paulista de Direito – EPD. Membro do Instituto Crypto Jus, grupo de estudos vinculado à Faculdade de Direito da USP que promove o debate da disciplina jurídica dos criptoativos. Hoje atua como Regulatory Specialist na Vórtx QR Tokenizadora'
                }
            ],
            settings: {
                itemsToShow: 1,
                modelValue: 1,
                snapAlign: 'center',
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                900: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                // 1024 and up
                901: {
                    itemsToShow: 1,
                    snapAlign: 'start',
                    mouseDrag: false,
                    touchDrag: false,
                },
            },
        }
    },
    methods: {
        closeModalTeacher() {
            this.modalArmando = false
            this.modalPedro = false
            this.modalRafael = false
            this.modalTermos = false
        },
        toggleTeachers(id) {
            if (id == 'armando') this.modalArmando = !this.modalArmando
            if (id == 'pedro') this.modalPedro = !this.modalPedro
            if (id == 'rafael') this.modalRafael = !this.modalRafael
        }
    }
}
</script>