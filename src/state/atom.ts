import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";


export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: [ {
        "descricao": "Estudar",
        "inicio": new Date("2022-05-29T09:00"),
        "fim": new Date("2022-05-29T13:00"),
        "completo": false,
        "id": 1642342747
    },
    {
        "descricao": "Descansar",
        "inicio": new Date("2022-05-26T09:00"),
        "fim": new Date("2022-05-27T11:00"),
        "completo": false,
        "id": 1642342959
    }]
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
  })