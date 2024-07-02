import Image from 'next/image'
import Link from 'next/link'

export function LandingPage() {
  return (
    <>
      <div className="flex justify-end px-10 py-5">
        <div className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-white hover:bg-slate-700 -my-2.5 ml-8">
          <a href="#planSection">Planos</a>
        </div>
        <div className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-white hover:bg-slate-700 -my-2.5 ml-8">
          <Link href={{ pathname: '/login' }}>Contato</Link>
        </div>
        <div className="text-gray-300 hidden lg:ml-8 lg:flex text-sm font-semibold lg:items-center lg:border-l lg:border-slate-800 lg:pl-8">
          <Link href={{ pathname: '/login' }}>Entrar</Link>
        </div>
      </div>
      <Image
        src="/p/1.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/2.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/3.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/4.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/5.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/6.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/7.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/8.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/9.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/10.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/11.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/12.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/13.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/14.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/15.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/16.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/17.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/18.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/19.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/20.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/21.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/22.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/23.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/24.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/25.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/26.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      {/* <Image
        src="/p/27.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      /> */}

      <div className="mt-20">
        <h1
          id="planSection"
          className="text-yellow-300 text-6xl text-center font-semibold font-arial"
        >
          Plano de Assinatura
        </h1>

        <div className="grid lg:grid-cols-3 max-w-6xl mx-auto mt-20 mb-5 gap-5">
          <Link
            href={{ pathname: '/register', search: 'plan=basico' }}
            className="cursor-pointer bg-[#182567] rounded text-white px-10 py-5 font-arial"
          >
            <h2 className="text-3xl font-bold">Plano Básico</h2>
            <p className="mt-4 text-xl">Verificações mensais: 200</p>
            <p className="mt-4 text-xl">Valor: R$ 1.200,00</p>
          </Link>
          <Link
            href={{ pathname: '/register', search: 'plan=intermediario' }}
            className="cursor-pointer bg-[#182567] rounded text-white px-10 py-5 font-arial"
          >
            <h2 className="text-3xl font-bold">Plano Intermediário</h2>
            <p className="mt-4 text-xl">Verificações mensais: 500</p>
            <p className="mt-4 text-xl">Valor: R$ 1.000,00</p>
          </Link>
          <Link
            href={{ pathname: '/register', search: 'plan=advanced' }}
            className="cursor-pointer bg-[#182567] rounded text-white px-10 py-5 font-arial"
          >
            <h2 className="text-3xl font-bold">Plano Avançado</h2>
            <p className="mt-4 text-xl">Verificações mensais: 1000</p>
            <p className="mt-4 text-xl">Valor: R$ 800,00</p>
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto mb-20 gap-5">
          <Link
            href={{ pathname: '/register', search: 'plan=empresarial' }}
            className="cursor-pointer bg-[#182567] rounded text-white px-10 py-5 font-arial"
          >
            <h2 className="text-3xl font-bold">Plano Empresarial</h2>
            <p className="mt-4 text-xl">Verificações mensais: 1200</p>
            <p className="mt-4 text-xl">Valor: R$ 600,00</p>
          </Link>
          <Link
            href={{ pathname: '/register', search: 'plan=enterprise' }}
            className="cursor-pointer bg-[#182567] rounded text-white px-10 py-5 font-arial"
          >
            <h2 className="text-3xl font-bold">Plano Enteprise</h2>
            <p className="mt-4 text-xl">Verificações mensais: Acima de 1500</p>
            <p className="mt-4 text-xl">Valor: sob demanda</p>
          </Link>
        </div>
      </div>
      <Image
        src="/p/28.png"
        className="mt-20"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/29.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/30.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/31.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
      <Image
        src="/p/32.png"
        className="mt-10"
        alt=""
        width={5000}
        height={5000}
        style={{ width: '100%' }}
      />
    </>
  )
}
