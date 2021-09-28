package com.tests;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorManager;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class ShakeDetectionModule extends ReactContextBaseJavaModule {

  Context context;
  SensorManager sensorMgr;
  Sensor accelerometer;
  ShakeDetector shakeDetector;



  public ShakeDetectionModule(@Nullable ReactApplicationContext reactContext) {
    super(reactContext);
    this.context = reactContext;

  }

  public void shakeDetection() {
    sensorMgr = (SensorManager) this.context.getSystemService(Context.SENSOR_SERVICE);
    accelerometer = sensorMgr.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
    shakeDetector = new ShakeDetector();
    shakeDetector.setOnShakeListener(new ShakeDetector.OnShakeListener() {
      @Override
      public void onShake(int count) {
        handleShakeEvent(count);
      }
    });
  }


  private void handleShakeEvent(int count) {
    Toast.makeText(context, "device shaken", Toast.LENGTH_LONG).show();
  }

  @NonNull
  @Override
  public String getName() {
    return "ShakeDetectionModule";
  }
}
