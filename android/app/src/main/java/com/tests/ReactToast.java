package com.tests;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ReactToast extends ReactContextBaseJavaModule {
  private ReactApplicationContext context;

  ReactToast(ReactApplicationContext context) {
    super(context);
    this.context = context;
  }
  @ReactMethod
  public void showToast(String message) {
    Toast.makeText(context, message, Toast.LENGTH_LONG).show();
  }

  @NonNull
  @Override
  public String getName() {
    return "ReactToast";
  }
}
