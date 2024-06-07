import * as Yup from 'yup';
import { RandomFormValues } from '@utils/types';

export const randomFormSchema = Yup.object().shape({
  tipoServicio: Yup.string().required('Tipo de servicio es requerido'),
  motivoProceso: Yup.string().when('tipoServicio', {
    is: 'otroSi',
    then: (schema) => schema.required('Motivo de proceso es requerido'),
    otherwise: (schema) => schema.notRequired(),
  }),
  desmotivoProceso: Yup.string().when('tipoServicio', {
    is: 'otroNo',
    then: (schema) => schema.required('desmotivo es requerido'),
    otherwise: (schema) => schema.notRequired(),
  }),
  tipoProceso: Yup.string().required('Tipo de procesos es requerido'),
  motproc1: Yup.string().when('tipoProceso', {
    is: 'proceso1',
    then: (schema) => schema.required('motproc1 es requerido'),
    otherwise: (schema) => schema.notRequired(),
  }),
  motproc2: Yup.string().when('tipoProceso', {
    is: 'proceso2',
    then: (schema) => schema.required('motproc2 es requerido'),
    otherwise: (schema) => schema.notRequired(),
  }),
}) as Yup.Schema<RandomFormValues>;

