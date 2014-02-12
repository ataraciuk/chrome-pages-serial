import processing.serial.*;

Serial myPort;
PrintWriter output;

void setup() {
  size(800, 600);
  println(Serial.list());
  myPort = new Serial(this, Serial.list()[10], 9600);
}

void draw () {
  // nothing happens in draw.  It all happens in SerialEvent()
}

void serialEvent (Serial myPort) {
  // get the byte:
  int inByte = myPort.read();
  println(inByte);
  output = createWriter("data.json");
  output.println("[ "+inByte+" ]");
  output.flush();  // Writes the remaining data to the file
  output.close();  // Finishes the file
  
  
}
