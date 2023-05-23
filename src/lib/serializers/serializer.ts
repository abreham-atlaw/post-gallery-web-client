abstract class Serializer<F, T>{

	abstract serialize(value: F): T

	abstract deserialize(data: T): F

}