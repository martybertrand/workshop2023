#include <DHT.h>
#include <WiFi.h>
#include <ArduinoHttpClient.h>

#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

const char ssid[] = "COMDEV-PEDAGO"; // Remplacez par le nom de votre réseau WiFi
const char* password = "julBEL99*@"; // Remplacez par le mot de passe de votre réseau WiFi
const char* apiEndpoint = "https://api-green-chauffage-n58glv11t-calvincs-projects.vercel.app/appartements/mesures";

WiFiClient client;

void setup() {
  Serial.begin(115200);
  dht.begin();

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connexion au WiFi en cours...");
  }
  Serial.println("Connecté au WiFi");
}

void loop() {
  delay(3000);
  float temperature = dht.readTemperature();

  if (isnan(temperature)) {
    Serial.println("Échec de la lecture du capteur DHT !");
    return;
  }

  String jsonData = "{\"appartement_id\":\"653a24dae23bf687d61fbdf1\",\"temperature_actuelle\":" + String(temperature) + "}";

  HttpClient http(client, apiEndpoint);
  http.beginRequest();
  http.post("/appartements/mesures");
  http.sendHeader("Content-Type", "application/json");
  http.sendHeader("Content-Length", jsonData.length());
  http.beginBody();
  http.print(jsonData);
  http.endRequest();

  int httpResponseCode = http.responseStatusCode();
  if (httpResponseCode > 0) {
    String response = http.responseBody();
    Serial.println("Réponse de l'API : " + response);
  } else {
    Serial.print("Erreur lors de l'envoi des données à l'API. Code d'erreur : ");
    Serial.println(httpResponseCode);
  }
}
