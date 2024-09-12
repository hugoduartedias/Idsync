import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Segmentos = () => {
    return (
        <div className="px-4 py-14 max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-[#09546b] mb-10">
                Segmentos de Atuação
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Atendemos a diversos segmentos de mercado com soluções inovadoras e seguras, garantindo confiabilidade e proteção de dados em processos essenciais para o sucesso das empresas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Segmento 1 */}
                <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl hover:bg-[#eaf8ff]">
                    <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-[#0E76A8] text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold text-[#09546b]">
                            Fintechs
                        </h3>
                    </div>
                    <p className="text-gray-600">
                        Autenticação segura e precisa para fintechs, garantindo que transações financeiras ocorram de forma protegida e sem fraudes.
                    </p>
                </div>

                {/* Segmento 2 */}
                <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl hover:bg-[#eaf8ff]">
                    <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-[#0E76A8] text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold text-[#09546b]">
                            Apostas Esportivas
                        </h3>
                    </div>
                    <p className="text-gray-600">
                        Proteja plataformas de apostas com nossa verificação biométrica de alta precisão, prevenindo fraudes e assegurando identidades.
                    </p>
                </div>

                {/* Segmento 3 */}
                <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl hover:bg-[#eaf8ff]">
                    <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-[#0E76A8] text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold text-[#09546b]">
                            Seguradoras
                        </h3>
                    </div>
                    <p className="text-gray-600">
                        Verificação segura para seguradoras, garantindo que apólices e processos sejam realizados com total autenticidade e proteção.
                    </p>
                </div>

                {/* Segmento 4 */}
                <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl hover:bg-[#eaf8ff]">
                    <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-[#0E76A8] text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold text-[#09546b]">
                            Saúde (Hospitais, Laboratórios e Clínicas)
                        </h3>
                    </div>
                    <p className="text-gray-600">
                        Proteção de dados no setor de saúde, com verificação segura de identidades para pacientes e profissionais.
                    </p>
                </div>

                {/* Segmento 5 */}
                <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl hover:bg-[#eaf8ff]">
                    <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-[#0E76A8] text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold text-[#09546b]">Logística</h3>
                    </div>
                    <p className="text-gray-600">
                        Verificação de identidades para garantir que o controle e acesso às informações críticas no setor de logística sejam seguros.
                    </p>
                </div>

                {/* Segmento 6 */}
                <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl hover:bg-[#eaf8ff]">
                    <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-[#0E76A8] text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold text-[#09546b]">
                            Controle e Acesso de Prédios Comerciais e Residenciais
                        </h3>
                    </div>
                    <p className="text-gray-600">
                        Garantimos que apenas pessoas autorizadas tenham acesso aos seus prédios, protegendo tanto a propriedade quanto as informações.
                    </p>
                </div>

                {/* Segmento 7 */}
                <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl hover:bg-[#eaf8ff]">
                    <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-[#0E76A8] text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold text-[#09546b]">Imobiliário</h3>
                    </div>
                    <p className="text-gray-600">
                        Facilite transações seguras no setor imobiliário, garantindo que todas as partes envolvidas sejam verificadas de forma confiável.
                    </p>
                </div>

                {/* Segmento 8 */}
                <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl hover:bg-[#eaf8ff]">
                    <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-[#0E76A8] text-3xl mr-3" />
                        <h3 className="text-2xl font-semibold text-[#09546b]">Educação</h3>
                    </div>
                    <p className="text-gray-600">
                        Garantimos segurança e conformidade em instituições educacionais, verificando a identidade de estudantes e profissionais.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Segmentos
