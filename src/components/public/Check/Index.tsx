'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
// import Webcam from 'react-webcam'
import Webcam from '@/modules/WebCam'
import Swal from 'sweetalert2'
import Swalrc from 'sweetalert2-react-content'
import { Player, Controls } from '@lottiefiles/react-lottie-player'

export default function Check({ uuid, callbackUrl }: any) {
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState<string>('document')
  const [photo, setPhoto] = useState('')
  const webcamRef = useRef(null)
  const webcamAutoStart = useRef(false)
  const [doc, setDoc] = useState('')
  const [file, setFile] = useState(null)
  const [verificationStarted, setVerificationStarted] = useState<boolean>(false)
  const [captured, setCaptured] = useState<boolean>(false)
  const [docLoaded, setDocLoaded] = useState<boolean>(false)
  const [source, setSource] = useState<string>('')

  const capture = useCallback(() => {
    setPhoto(webcamRef?.current?.getScreenshot())
    setCaptured(true)
  }, [webcamRef])

  useEffect(() => {
    setMounted(true)
  }, [])

  function nextStep(page: string) {
    setPage(page)
  }

  function selectDocument(d: string) {
    setDoc(d)
  }

  function uploadDocumentClick() {
    setDocLoaded(false)
    window.document.getElementById('uploadDocument')?.click()
  }

  function changeFileDocument(e: React.ChangeEvent<HTMLInputElement>) {
    setDocLoaded(true)
    const firstFile = Array.from(e.target.files[0])
    setFile(firstFile)
    const fr = new FileReader()
    fr.onload = function () {
      const imgUploadedDoc = window.document.getElementById('imgUploadedDoc')
      if (imgUploadedDoc) imgUploadedDoc.src = fr.result
      setSource(fr.result)
    }
    fr.readAsDataURL(e.target.files[0])
  }

  function firstNextButton() {
    if (!doc) {
      Swal.fire({
        title: 'Erro!',
        text: 'Escolha um tipo de documento.',
        icon: 'error'
      })
      return
    }

    if (!file) {
      Swal.fire({
        title: 'Erro!',
        text: 'Nenhum documento foi carregado.',
        icon: 'error'
      })
      return
    }
    nextStep('face')
  }

  function backToChoiceDocument() {
    setVerificationStarted(false)
    nextStep('document')
    setCaptured(false)
  }

  const [videoConstraints, setVideoConstraints] = useState({
    width: 1280,
    height: 720,
    facingMode: 'user'
  })

  function startVerification() {
    // Liga a camera. Por baixo dos panos, quando uma propriedade de video ou audio do Webcam é alterada
    // dispara a funcao que controla o update do component, e caso seja video ou audio, ativa a funcao que liga a camera
    setVideoConstraints({
      width: 1280,
      height: 720 + Math.random(),
      facingMode: 'user'
    })

    setVerificationStarted(true)
  }

  function retrySelfie() {
    setCaptured(false)
  }

  async function submit() {
    const response = await fetch('/api/v1/checkForm', {
      method: 'POST',
      body: JSON.stringify({
        docType: doc,
        source,
        target: photo,
        uuid
      })
    })

    const json = await response.json()

    if (json.similarity >= 0.7) {
      if (callbackUrl) document.location.href = callbackUrl
      else {
        Swal.fire(
          'Sucesso!',
          'Essa verificação foi validada com sucesso.',
          'success'
        )
      }
    } else {
      Swal.fire('Erro!', 'Não conseguimos reconhecer seu rosto.', 'error')
    }
  }

  return (
    mounted && (
      <>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-black">
          <div style={{ display: page === 'document' ? 'block' : 'none' }}>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Verificação de identidade
            </h2>

            <div className="mt-4">
              <p className="text-sm">
                Escolha um tipo de documento com foto para utilizar para esta
                verificação.
              </p>
            </div>

            <div
              onClick={() => selectDocument('CNH')}
              className={
                'group border-2 rounded-2xl p-2 mt-5 flex gap-2 cursor-pointer font-bold transition' +
                (doc === 'CNH'
                  ? ' text-indigo-600 border-indigo-600'
                  : ' text-gray-300 border-gray-300') +
                ' hover:border-indigo-600 hover:text-indigo-600'
              }
            >
              <div
                className={
                  'text-white rounded-xl p-2' +
                  (doc === 'CNH' ? ' bg-indigo-600' : ' bg-gray-300') +
                  ' group-hover:bg-indigo-600'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-car-front-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p>CNH</p>
              </div>
            </div>

            <div
              onClick={() => selectDocument('RG')}
              className={
                'group border-2 rounded-2xl p-2 mt-2 flex gap-2 cursor-pointer font-bold transition' +
                (doc === 'RG'
                  ? ' text-indigo-600 border-indigo-600'
                  : ' text-gray-300 border-gray-300') +
                ' hover:border-indigo-600 hover:text-indigo-600'
              }
            >
              <div
                className={
                  'text-white rounded-xl p-2' +
                  (doc === 'RG' ? ' bg-indigo-600' : ' bg-gray-300') +
                  ' group-hover:bg-indigo-600'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-person-badge-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p>RG</p>
              </div>
            </div>

            <div
              onClick={() => selectDocument('CPF')}
              className={
                'group border-2 rounded-2xl p-2 mt-2 flex gap-2 cursor-pointer font-bold transition' +
                (doc === 'CPF'
                  ? ' text-indigo-600 border-indigo-600'
                  : ' text-gray-300 border-gray-300') +
                ' hover:border-indigo-600 hover:text-indigo-600'
              }
            >
              <div
                className={
                  'text-white rounded-xl p-2' +
                  (doc === 'CPF' ? ' bg-indigo-600' : ' bg-gray-300') +
                  ' group-hover:bg-indigo-600'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-person-vcard-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p>CPF</p>
              </div>
            </div>

            <div
              onClick={uploadDocumentClick}
              className={
                'border border-dashed rounded-2xl p-5 mt-8 text-xs text-center cursor-pointer' +
                (!docLoaded ? '' : ' hidden')
              }
            >
              <p>Faça upload do seu documento clicando aqui.</p>
              <input
                type="file"
                name=""
                id="uploadDocument"
                className="hidden"
                onChange={changeFileDocument}
              />
              <div className="mt-3 flex justify-center text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  className="bi bi-cloud-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z" />
                </svg>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <img src="" alt="" id="imgUploadedDoc" className="rounded-xl" />
            </div>

            <div
              className={
                'mt-4 flex justify-center text-xs' +
                (docLoaded ? '' : ' hidden')
              }
            >
              <p>
                A imagem não está boa?{' '}
                <a
                  onClick={uploadDocumentClick}
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Clique aqui
                </a>{' '}
                para carregar outra imagem.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={firstNextButton}
                type="button"
                className="flex w-full justify-center rounded-xl bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                Próximo
              </button>
            </div>
          </div>

          <div style={{ display: page === 'face' ? 'block' : 'none' }}>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              É hora de tirar uma selfie
            </h2>

            <div className="mt-4">
              <p className="text-sm">
                Procure um local iluminado, retire todos os acessórios do seu
                rosto e assim que estiver pronto, clique no botão abaixo.
              </p>
            </div>

            <div className={'mt-10' + (verificationStarted ? ' hidden' : '')}>
              <Player
                src="/face.json"
                background="transparent"
                speed={1}
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
              ></Player>
            </div>

            <div className={'mt-8' + (verificationStarted ? ' hidden' : '')}>
              {/* <div className="flex justify-center text-gray-300 mb-10 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  className="bi bi-person-bounding-box"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                </svg>
              </div> */}

              <button
                onClick={startVerification}
                type="button"
                className="flex w-full justify-center rounded-xl bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                Iniciar
              </button>
            </div>

            <div>
              <div className={'mt-5' + (!verificationStarted ? ' hidden' : '')}>
                <div className={'mt-3' + (!captured ? '' : ' hidden')}>
                  <Webcam
                    audio={false}
                    height={720}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={1280}
                    stop={!verificationStarted}
                    videoConstraints={videoConstraints}
                  />
                  <button
                    onClick={capture}
                    type="button"
                    className="mt-3 flex w-full justify-center rounded-xl bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
                  >
                    Confirmar
                  </button>
                </div>
                <div className={'mt-3' + (captured ? '' : ' hidden')}>
                  <Image
                    src={photo}
                    width="100"
                    height="100"
                    alt=""
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>

            <div className={'mt-2 ' + (captured ? '' : ' hidden')}>
              <button
                onClick={retrySelfie}
                type="button"
                className="flex w-full justify-center rounded-xl bg-gray-500 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                Refazer selfie
              </button>
            </div>

            <div className="mt-2">
              <button
                onClick={backToChoiceDocument}
                type="button"
                className="flex w-full justify-center rounded-xl bg-gray-300 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                Voltar
              </button>
            </div>

            <div className={'mt-2 ' + (captured ? '' : ' hidden')}>
              <button
                onClick={submit}
                type="button"
                className="mt-3 flex w-full justify-center rounded-xl bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                Enviar para análise
              </button>
            </div>
          </div>
        </div>
      </>
    )
  )
}
