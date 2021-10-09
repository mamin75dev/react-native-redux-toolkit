package com.tests;

import android.graphics.Color;
import android.graphics.Typeface;
import android.os.Build;
import android.view.Gravity;
import android.view.View;
import android.widget.TextView;
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
    Toast toast = Toast.makeText(context, message, Toast.LENGTH_LONG);
    View view = toast.getView();
//    view.setBackgroundResource(R.drawable.toast_shape);
    TextView textView = view.findViewById(android.R.id.message);
    textView.setTextColor(Color.parseColor("#FFFFFF"));
    Typeface typeface = Typeface.createFromAsset(context.getAssets(), "fonts/Vazir-Medium-FD-WOL.ttf");
    textView.setTypeface(typeface);
    textView.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
    textView.setGravity(Gravity.CENTER);
    toast.show();
  }

  @NonNull
  @Override
  public String getName() {
    return "ReactToast";
  }
}
