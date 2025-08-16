interface FlyInterface {
  fly(): void;
}

interface SwimInterface {
  swim(): void;
}


class Duck implements FlyInterface, SwimInterface {
  fly() {
    console.log('Duck is flying');
  }

  swim() {
    console.log('Duck is swimming');
  }
}

//一个类实现多个接口