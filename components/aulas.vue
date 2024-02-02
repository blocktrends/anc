<template>
    <div class="xl:container  mx-auto" id="conteudo">

        <div class="lg:flex py-14 lg:py-24">
            <div class="flex-1 lg:max-w-[50%]">
                <div
                    class=" inline-block text-white text-xs font-bold whitespace-nowrap justify-center items-stretch rounded border border-[color:var(--Cor-Primria-Ancord,#00A7D0)] bg-neutral-900 px-3.5 py-2 border-solid self-start">
                    CONTEÚDO
                </div>
                <div class="text-4xl py-10 sm:text-5xl sm:leading-tight font-bold">
                    O que você <br class="brmobile" />vai aprender
                </div>
                <!--
                <div class="items-stretch flex gap-2">
                    <img class="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/play.svg" alt="Play" />




                    <div
                        class="text-2xl text-[#00A7D0]  font-semibold leading-7 bg-clip-text bg-[linear-gradient(224deg,#00A7D0_59.55%,#010918_188.54%)] self-center grow whitespace-nowrap my-auto">
                        Veja o curso por dentro
                    </div>
                </div>
                -->

            </div>
            <div class="w-full mt-10 lg:mt-0 lg:max-w-[50%]">
                <div class="accordion pb-20 flex flex-col items-end justify-center">

                    <!--  Panel 1  -->
                    <div class="lg:pl-8 sm:pl-0">
                        <input type="checkbox" checked name="panel" id="panel-1" class="hidden">
                        <label for="panel-1"
                            class="relative uppercase pl-11 border-t border-[#93A5C7] block cursor-pointer green-text p-4 
                            text-sm sm:text-lg font-semibold pr-8">
                            MÓDULO I - Introdução aos Criptoativos e à Blockchain
                        </label>

                        <div class="accordion__content border-y border-[#93A5C7]  overflow-hidden ">
                            
                            <div class="pb-7 pt-7 pl-12">
                                <h2 class="accordion__header pr-10 text-[#424766] text-lg font-bold ">
                                    Aula 1: Conceitos Gerais, História e Evolução do Mercado de Ativos Digitais (Professor: Nicholas Sacchi)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Nesta primeira aula, mergulhamos na numismática e na fascinante história do dinheiro, desvendando como os criptoativos emergiram e transformaram o mercado financeiro. Exploramos também os principais agentes que têm moldado o cenário dos ativos digitais ao longo do tempo.
                                </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header pr-10 text-[#424766] text-lg font-bold ">
                                    Aula 2: Bitcoin e a Primeira Grande Aplicação da Tecnologia Blockchain (Professor: Murilo Cortina)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    A segunda aula é uma jornada pela criação do Bitcoin em 2008, destacando sua revolucionária adoção tecnológica. Discutimos os conceitos de descentralização, mineração, consenso e incentivos, além de mergulhar nas teses de investimento que circundam o universo do Bitcoin.
                                </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header pr-10  text-[#424766] text-lg font-bold ">
                                    Aula 3: Ethereum e o Dinheiro Programável (Professor: Murilo Cortina)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Na terceira aula, discutimos o surgimento do Ethereum e a introdução da programabilidade nas finanças. A Aula também foca nos smart contracts, suas implicações e as teses de investimento mais relevantes para o Ethereum.
                                </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header pr-10  text-[#424766] text-lg font-bold ">
                                    Aula 4: Aprofundando no Setor: As Diferentes Subclasses de Criptoativos (Professor: Theodoro Fleury, CFA)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Nesta aula, desbravamos os diferentes tipos de tokens e a rica diversidade do mercado de criptoativos. Aqui são abordados temas como plataformas, DeFi, stablecoins e armazenamento distribuído, revelando um mercado complexo e interconectado.
                                 </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header pr-10  text-[#424766] text-lg font-bold ">
                                    Aula 5: DeFi, Staking e Outros Mecanismos de Geração de Renda com Cripto (Professor: Theodoro Fleury, CFA)
                                 </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    A quinta aula foca em finanças descentralizadas, explicando sobre corretoras descentralizadas, provedores de liquidez, AMM e empréstimo de criptoativos. Também é abordado como rentabilizar criptoativos através do staking.
                                 </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header pr-10  text-[#424766] text-lg font-bold ">
                                    Aula 6: Do NFT ao Metaverso: Entendendo o Mercado de Registros Digitais (Professor: Nicholas Sacchi)
                                 </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Nesta aula, mergulhamos no universo dos NFTs e do metaverso, explorando como a propriedade intelectual e os registros em blockchain estão redefinindo modelos de negócio e criando novas possibilidades no mundo digital.
                                 </i>
                            </div>

                        </div>

                    </div>

                    <!--  Panel 2  -->
                    <div class="lg:pl-8 sm:pl-0">
                        <input type="checkbox"  name="panel" id="panel-2" class="hidden">
                        <label for="panel-2"
                            class="relative uppercase pl-11 border-t border-[#93A5C7] block cursor-pointer green-text p-4 
                            text-sm sm:text-lg font-semibold pr-5">
                            MÓDULO II - O Mercado na Prática
                        </label>

                        <div class="accordion__content border-y border-[#93A5C7] overflow-hidden ">
                            
                            <div class="pb-7 pt-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 7: Um Panorama sobre a Institucionalização do Mercado de Ativos Digitais (Professor: Gerson Junior, PhD)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Na sétima aula, apresentamos o panorama sobre a profissionalização e institucionalização do mercado de ativos digitais, analisando como a fusão entre as finanças tradicionais e os criptoativos está remodelando o cenário financeiro global. Também destacamos os principais players e suas inovadoras soluções.
                                 </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 8: Alocação: Impactos da Inclusão de Criptos em um Portfólio de Investimentos (Professor: Gerson Junior, PhD)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Nesta aula, avaliamos o impacto da inclusão de Bitcoin e Ether em portfólios de investimentos. Discutimos conceitos como o índice de Sharpe e a correlação com investimentos tradicionais no Brasil, além de ponderar sobre o percentual ideal de criptoativos para diferentes perfis de risco.
                                 </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 9: Cripto à vista: comprando e armazenando ativos digitais (Professor: Nicholas Sacchi)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Na nona aula, exploramos o processo de escolha de uma plataforma de exchange confiável, detalhando os diferentes tipos de ordens e as nuances das transferências via blockchain. Esta Aula é um guia prático para navegar com segurança no mundo das exchanges de criptoativos.
                                 </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 10: Fundos, ETFs e Outros Instrumentos de Acesso a Esse Mercado (Professor: Murilo Cortina)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Esta aula é um mergulho profundo nos instrumentos financeiros disponíveis para investidores interessados no universo cripto. Discutimos as diversas formas de acessar o mercado de criptoativos, incluindo carteiras administradas, fundos de fundos e a avaliação de ETFs. 
                                 </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 11: Qual dos Instrumentos de Investimentos é Mais Adequados para o Perfil do Cliente? (Professor: Murilo Cortina)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    A décima primeira aula é dedicada a ajudar a identificar o melhor formato de investimento para atender a diferentes perfis e necessidades de clientes. Comparamos e contrastamos as vantagens e desvantagens do mercado à vista e dos fundos de investimento em criptoativos.
                                 </i>
                            </div>

                        </div>

                    </div>

                   
                    <!--  Panel 3  -->
                    <div class="lg:pl-8 sm:pl-0">
                        <input type="checkbox"  name="panel" id="panel-3" class="hidden">
                        <label for="panel-3"
                            class="relative uppercase pl-11 border-t border-[#93A5C7] block cursor-pointer green-text p-4 
                            text-sm sm:text-lg font-semibold pr-5">
                            MÓDULO III - Regulação, Tributação e Aspectos Legais
                        </label>

                        <div class="accordion__content border-y border-[#93A5C7] overflow-hidden ">
                            
                            <div class="pb-7 pt-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 12: Marco Regulatório dos Criptoativos no Brasil (Professor: Carlos Mauricio Mirandola)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    A décima segunda aula aborda o marco regulatório dos criptoativos no Brasil, destacando a importância da regulação para a proteção de investidores, a integridade dos mercados, e a promoção da inovação tecnológica. Discute-se a legislação vigente, os órgãos reguladores como o Banco Central, CVM e Receita Federal, e os mecanismos de autorregulação e fiscalização.
                                </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 13: Legislação Atual e Perspectivas de Regulação (Professor: Carlos Mauricio Mirandola)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    A Aula 13 foca na Lei 14.478/22, detalhando a regulamentação dos prestadores de serviços de criptoativos no Brasil. Discute-se o contexto da lei, as definições de ativos virtuais e VASPs (Prestadores de Serviços de Ativos Virtuais), as exigências regulatórias, e como a legislação aborda a prevenção à lavagem de dinheiro e financiamento ao terrorismo.
                                 </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 14: Investimento Cripto (Professor: Carlos Mauricio Mirandola)
                                 </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    A décima quarta explora a regulação de investimentos em criptoativos, abordando as normas da CVM, fundos de investimento, e autorregulação pela ANBIMA. Destaca-se a importância da conformidade com as regulações para fundos cripto, o papel da ANBIMA na promoção de práticas saudáveis no mercado financeiro e a aplicabilidade de normas para a gestão e negociação de criptoativos.
                                 </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 15: Tributação: Orientações da Receita Federal sobre como Declarar Criptoativos (Professor: Carlos Mauricio Mirandola)
                                 </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    A Aula 15 abrange a tributação de criptoativos no Brasil, enfatizando as diretrizes da Receita Federal e a aplicação da Instrução Normativa 1888. Detalha os procedimentos corretos para a declaração de criptoativos, abordando aspectos de obrigações tributárias, métodos de cálculo para ganho de capital e as penalidades para declarações inexatas.
                                  </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 16: Planejamento Sucessório e Proteção Patrimonial com Criptoativos (Professor: Nicholas Sacchi)
                                 </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Na décima sexta aula, abordamos como os criptoativos podem ser integrados ao planejamento sucessório e à proteção patrimonial. Esta Aula é um olhar detalhado sobre os instrumentos mais adequados para garantir segurança e eficiência no manejo de ativos digitais em longo prazo.
                                  </i>
                            </div>

                        </div>

                    </div>

                    <!--  Panel 4  -->
                    <div class="lg:pl-8 sm:pl-0">
                        <input type="checkbox"  name="panel" id="panel-4" class="hidden">
                        <label for="panel-4"
                            class="relative uppercase pl-11 border-y border-[#93A5C7] block cursor-pointer green-text p-4 
                            text-sm sm:text-lg font-semibold pr-5">
                            MÓDULO IV - A Transformação do<br /> Mercado de Capitais com <br class="brmobile" />os Ativos Digitais
                        </label>

                        <div class="accordion__content overflow-hidden ">
                            
                            <div class="pb-7 pt-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 17: Conceitos Básicos, Aplicações Práticas e Potencialidades da Tokenização (Professor: Fernando Carvalho & Anderson Gabriel)
                                </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Na décima sétima aula exploramos o potencial transformador da tokenização no futuro do mercado financeiro. Revisitamos o conceito de tokens, fracionamento de ativos e exploramos os novos modelos de negócios impulsionados pela tokenização.
                                 </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 18: Conceitos e Características das Moedas Digitais de Bancos Centrais (CBDC’s) (Professor: Murilo Cortina)
                                 </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Na décima oitava aula, mergulhamos no mundo das Moedas Digitais de Bancos Centrais — as CBDC’s — desvendando seus modelos de atacado e varejo e suas características únicas.
                                </i>
                            </div>

                            <div class="pb-7 pl-12">
                                <h2 class="accordion__header text-[#424766] text-lg font-bold ">
                                    Aula 19: O Real Digital e a Introdução da Programabilidade da Moeda Brasileira pelo Banco Central do Brasil (Professor: Murilo Cortina)
                                 </h2>
                                <i class="accordion__body text-[#6775A9] pt-2 block text-md lg:pr-36">
                                    Na décima nona aula, exploramos a introdução do real digital pelo Banco Central do Brasil — o DREX — analisando como essa inovação permitirá usos inovadores para a moeda brasileira e seu papel nas finanças descentralizadas.
                                 </i>
                            </div>

                           

                          

                        </div>

                    </div>



                

            </div>
        </div>
    </div>
</div></template>