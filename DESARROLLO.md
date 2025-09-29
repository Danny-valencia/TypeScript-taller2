Clases
1. BaseEmployee (abstracta)
Clase abstracta para definir la estructura minima básica de un empleado dentro del sistema a desarrollar.

Atributos 
user: Datos personales del empleado (nombre, edad, email, género).
id: Identificador único del empleado.
department: Departamento al que pertenece el empleado.

getDetail: lo utilizo para ser implementado por las clases hijas developer y manager
calculateSalary: lo utilozo para calcular el salario del empleado segun el rol que tiene
//Ambos son metodos abstractos

2. Developer extend de BaseEmployee
este representa a un desarrollador en el departamento de IT
atributos
programminglenguages: este es una lista de los lenguajes de programacion de domina
metodos
getDetail(): va a retornar la información del desarrollador, con los lenguajes que domina
calculateSalary: calcula el salario base mas el extra por cada lenguaje.

3. Manager extends BaseEmployee
este representa a un gerente que lidera un grupo de empleados dentro de un departamento
atributos 
teamsize: este muestra la cantidad de personas a cargo
metodos
getDetails(): retorna la info del gerente y la cantidad de personas a cargo
calculateSalary(): calcula el salario base mas un extra por cada miembro del equipo a cargo.

4. ApiService
Servicio encargado de la comunicación con la API externa.
Métodos:
getUsers(): Obtiene una lista de usuarios desde la API. Solo se usan los datos relevantes: nombre, edad, email y género.
getUserById(id): Devuelve un usuario específico según su identificador.

5. EmployeeService
Servicio que administra los empleados del sistema. Se apoya en ApiService para cargar datos desde la API.
Atributos 
employees: Lista de empleados cargados.
Métodos:
loadEmployeesFromApi(): Carga empleados desde la API y crea instancias de Developer y Manager.
getEmployeeById(id): Busca un empleado por su identificador.
getAllEmployees(): Retorna todos los empleados registrados.
addEmployee(employee): Agrega un nuevo empleado manualmente.

6. main.ts
Punto de entrada de la aplicación. Se encarga de inicializar los servicios, cargar los empleados desde la API y mostrar en consola sus detalles junto con el salario calculado.

Inyección de depencias

1. El sistema utiliza inyección de dependencias en la clase EmployeeService, la cual recibe una instancia de ApiService en su constructor.
De esta forma:
EmployeeService no depende directamente de cómo se obtienen los datos de la API.
Si en el futuro se cambia la fuente de datos (por ejemplo, otra API o una base de datos local), solo habría que modificar ApiService, sin tocar EmployeeService.
Este enfoque mejora la flexibilidad, mantenibilidad y escalabilidad del sistema.

Dificultades encontradas

1. Consumo de la API: Al principio, fue un reto filtrar los datos y quedarse solo con los campos relevantes (name, age, email, gender).
Solución: Se aplicó un map() para transformar la respuesta antes de crear los objetos User.

Herencia y polimorfismo: Implementar los métodos abstractos (getDetails y calculateSalary) en las clases hijas requería diferenciar claramente las reglas de cada rol.
Solución: Se definieron reglas de salario específicas para Developer y Manager, asegurando que ambas clases implementaran los métodos correctamente.

Carga de empleados desde la API: Al inicio, no estaba claro cómo decidir qué usuarios serían Developer y cuáles Manager.
Solución: Se optó por un criterio fijo en loadEmployeesFromApi (ejemplo: primeros dos usuarios → Developer, siguiente → Manager).

Estructura del main.ts: Manejar la asincronía al cargar empleados podía generar errores si no se esperaba la promesa.
Solución: Se usó async/await y un bloque try-catch para asegurar el correcto manejo de errores.


//Nota para el profe, si llega hasta aqui ¡casi muero en el intento!