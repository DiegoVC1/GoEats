import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pan2',
  imports: [FormsModule],
  templateUrl: './pan2.component.html',
  styleUrl: './pan2.component.css'
})
export class Pan2Component {

  selectedMeal: string = 'desayuno';  // Valor inicial

  // Datos de los ítems por defecto con las nuevas descripciones y precios
  itemDesayuno = {
    name: 'Huevos estrellados',
    description: 'Elegir cantidad',
    price: 120, // Precio actualizado
    icon: '8.png', // URL del ícono de ejemplo
    stock: 10 // Cantidad inicial en stock
  };

  itemComida = {
    name: 'Filete con champiñones',
    description: 'Elegir término de carne y complemento',
    price: 120,
    icon: '13.png',
    stock: 0 // Cantidad inicial en stock
  };

  itemCena = {
    name: 'Sincronizada',
    description: 'Elegir complemento',
    price: 120,
    icon: '14.png',
    stock: 3
  };

  imageSrc: string = '';
  imageName: string = '';

  onImageSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Verificamos si e.target no es null antes de acceder a result
        if (e.target && e.target.result) {
          this.imageSrc = e.target.result as string;  // Asignamos el resultado como un string
        }
      };
      reader.readAsDataURL(file);  // Lee el archivo como una URL base64
    }
  }

  desayunoItems: any[] = [
    {     name: 'Huevos estrellados', description: 'Elegir cantidad',  price: 120, icon: '8.png',stock: 10 }// Cantidad inicial en stock}
  ];
  comidaItems: any[] = [
    { nombre: 'Filete con champiñones', precio: 120, cantidad: 1, descripcion: 'Elegir término de carne y complemento', imagen: 'ruta/a/imagen2.jpg' }
  ];
  cenaItems: any[] = [
    { nombre: 'Sincronizada', precio: 120, cantidad: 1, descripcion: 'Elegir complemento', imagen: 'ruta/a/imagen3.jpg' }
  ];


  newItem = {
    name: '',
    price: 0,
    stock: 0,
    description: '',
    icon: 'https://via.placeholder.com/30' // Por defecto, se usa un ícono de ejemplo
  };

  clearFields(): void {
    this.newItem = { name: '', price: 0, stock: 0, description: '', icon: 'https://via.placeholder.com/30' };
    this.imageSrc = '';
    this.imageName = '';
    this.newProduct = { name: '', description: '', price: 0, quantity: 1, icon: '' };

  }

  productName: string = '';
  productPrice: number | string = '';  // Puede ser string si es un campo de texto
  productQuantity: number = 1;
  productDescription: string = '';
  onAgregarProducto(): void {

    console.log('Valor de productName:', this.productName);
    const nuevoItem = {
      nombre: this.productName,
      precio: this.productPrice,
      cantidad: this.productQuantity,
      descripcion: this.productDescription,
      imagen: this.imageSrc || '',  // Usamos la imagen cargada (base64) o vacío si no se carga
    };

    
  
    // Agregar el ítem al arreglo correspondiente según el tipo de comida seleccionado
    if (this.selectedMeal === 'desayuno') {
      this.desayunoItems.push(nuevoItem);
    } else if (this.selectedMeal === 'comida') {
      this.comidaItems.push(nuevoItem);
    } else if (this.selectedMeal === 'cena') {
      this.cenaItems.push(nuevoItem);
    }
  
    // Limpiar los campos después de agregar el producto
    this.productName = '';
    this.productPrice = '';
    this.productQuantity = 1;
    this.productDescription = '';
    this.imageSrc = '';
  }

  productListDesayuno: any[] = [];
  productListComida: any[] = [];
  productListCena: any[] = [];

  // Datos del nuevo producto
  newProduct = {
    name: '',
    description: '',
    price: 0,
    quantity: 1,
    icon: ''
  };

  onAgregarProducto2(): void {
    
    this.newProduct.icon = this.imageSrc
    const nuevoProducto = {
      name: this.newProduct.name,
      description: this.newProduct.description,
      price: this.newProduct.price,
      quantity: this.newProduct.quantity,
      icon: this.newProduct.icon
    };

    // Agregamos el producto al arreglo
    if (this.selectedMeal === 'desayuno') {
      this.productListDesayuno.push(nuevoProducto);
    } else if (this.selectedMeal === 'comida') {
      this.productListComida.push(nuevoProducto);
    } else if (this.selectedMeal === 'cena') {
      this.productListCena.push(nuevoProducto);
    }

    // Limpiamos los campos del formulario
    this.newProduct = { name: '', description: '', price: 0, quantity: 1, icon: '' };
    this.imageSrc = '';
  }

}
