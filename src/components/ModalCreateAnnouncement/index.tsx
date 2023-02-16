
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createAnnouncement } from '../../validators/createAnnouncement';
import { Form, ModalStyle } from './style';
import { B2500, H5500 } from '../../styles/typography';
import { InputRadio } from '../InputRadio';
import { ErrorMessage } from '../Input/styles';
import { Input } from '../Input';



interface IImage{
  image_url: string
}


interface ICreateAnnouncement{
  is_sale: string,
  title: string,
  year: string,
  mileage: string,
  price: string,
  description: string,
  is_car: boolean,
  image_capa_url: string,
  image_galeria_url: string,
}


export const ModalCreateAnnouncement = () => {

  const {register,
    handleSubmit,
    formState: {errors},

  } =useForm<ICreateAnnouncement>({
    resolver: yupResolver(createAnnouncement)
  })

  // const { fields } = useFieldArray({
  //   name: 'image'
  // })

  
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  
  const onSubmit = (data: ICreateAnnouncement) => {
    console.log(data);
  };


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <H5500 id='aria-labelledby'>Criar anúncio</H5500>
            <B2500>Tipo de conta</B2500>
            <div className="flex">
              <InputRadio
                id="venda"
                label="Venda"
                name="is_sale"
                value="true"
                register={register}
              />
              <InputRadio
                id="leilao"
                label="Leilão"
                name="is_sale"
                value="false"
                register={register}
              />
            </div>
        {errors.is_sale && <ErrorMessage>Escolha uma das opções acima</ErrorMessage>}

          <B2500>Informações do veículo</B2500>

          <Input
          label="Título"
          placeholder="Digitar o título"
          name="title"
          register={register}
          errors={errors}
        />

        <div className="flex">
          <Input
            label="Ano"
            placeholder="Digitar ano"
            name="year"
            maxLength={4}
            register={register}
            errors={errors}
          />
          <Input
            label="Quilometragem"
            placeholder="0"
            name="mileage"
            maxLength={8}
            register={register}
            errors={errors}
          />
          <Input
            label="Preço"
            placeholder="Digitar preço"
            name="price"
            maxLength={10}
            register={register}
            errors={errors}
          />
        </div>
        <label htmlFor="description"></label>
        
        <Input label='Descrição' name='description' register={register} placeholder='Digitar descrição'></Input>

        <B2500>Tipo de veículo</B2500>
            <div className="flex">
              <InputRadio
                id="carro"
                label="Carro"
                name="is_car"
                value="true"
                register={register}
              />
              <InputRadio
                id="moto"
                label="Moto"
                name="is_car"
                value="false"
                register={register}
              />
            </div>
        {errors.is_sale && <ErrorMessage>Escolha uma das opções acima</ErrorMessage>}

        <Input
            label="Imagem de capa"
            placeholder="Inserir URL da imagem"
            name="image_capa_url"
            maxLength={8}
            register={register}
            errors={errors}
          />

        <Input
            label="1° Imagem da galeria"
            placeholder="Inserir URL da imagem"
            name="image_galeria_url"
            maxLength={8}
            register={register}
            errors={errors}
          />

        <Button variant='contained' sx={{backgrounColor:'#EDEAFD', color: '#4529E6'}} type="button">Adicionar campo para imagem da galeria</Button>

        <Button type="submit">Finalizar Cadastro</Button>
          </Form>
        </Box>
      </Modal>
    </div>
  );

}