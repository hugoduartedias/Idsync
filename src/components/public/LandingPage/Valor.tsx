import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Importando o Swiper
const Valor = () => {
    return (
        <div className="px-4 py-14 max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-[#09546b] mb-10">
                Proposta de Valor
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Nossa plataforma combina inovação tecnológica com uma experiência de usuário simplificada, proporcionando segurança de dados e verificação de identidade.
            </p>

            <div className="relative">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="mySwiper"
                >
                    {/* Slide 1 - Precisão e Confiabilidade */}
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-semibold text-[#09546b] mb-4 text-center">
                                Precisão e Confiabilidade
                            </h3>
                            <p className="text-gray-600 text-center">
                                Nossos algoritmos de biometria facial oferecem precisão superior, reduzindo falsos positivos e negativos.
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 - Processos Automatizados */}
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-semibold text-[#09546b] mb-4 text-center">
                                Processos Automatizados
                            </h3>
                            <p className="text-gray-600 text-center">
                                Verificações em tempo real, tornando o processo de autenticação rápido e eficiente.
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 - Flexibilidade */}
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-semibold text-[#09546b] mb-4 text-center">
                                Flexibilidade e Integração
                            </h3>
                            <p className="text-gray-600 text-center">
                                Nossa plataforma se adapta facilmente aos sistemas existentes, integrando-se sem complicações.
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Slide 4 - Segurança de Dados */}
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-semibold text-[#09546b] mb-4 text-center">
                                Segurança de Dados
                            </h3>
                            <p className="text-gray-600 text-center">
                                Conformidade com as regulamentações e criptografia de ponta a ponta garantem a proteção dos dados.
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Slide 5 - Inovação Contínua */}
                    <SwiperSlide>
                        <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-semibold text-[#09546b] mb-4 text-center">
                                Inovação Contínua
                            </h3>
                            <p className="text-gray-600 text-center">
                                Nossa tecnologia é atualizada constantemente para combater novas ameaças e fraudes.
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Setas de navegação com mais espaçamento e estilo */}
                    <div className="swiper-button-prev absolute top-1/2 -left-10 transform -translate-y-1/2 text-[#09546b] text-4xl cursor-pointer">
                        <FaArrowLeft />
                    </div>
                    <div className="swiper-button-next absolute top-1/2 -right-10 transform -translate-y-1/2 text-[#09546b] text-4xl cursor-pointer">
                        <FaArrowRight />
                    </div>
                </Swiper>
            </div>

            {/* Conclusão */}
            <div className="mt-12 text-lg text-gray-600 text-center">
                <p>
                    Ao escolher nossa plataforma, você investe em segurança, eficiência e inovação para proteger seus dados e garantir processos confiáveis.
                </p>
            </div>
        </div>
    );
};

export default Valor;
