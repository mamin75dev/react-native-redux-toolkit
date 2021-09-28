package com.tests;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONException;
import org.json.JSONObject;

public class VersionData extends ReactContextBaseJavaModule {

  VersionData(ReactApplicationContext context) {
    super(context);
  }

  @ReactMethod
  public void getVersionData(Promise promise) {
    JSONObject versionData = new JSONObject();
    try {
      versionData.put("version_code", BuildConfig.VERSION_CODE);
      versionData.put("version_name", BuildConfig.VERSION_NAME);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    promise.resolve(versionData.toString());
  }

  @NonNull
  @Override
  public String getName() {
    return "VersionData";
  }

}
