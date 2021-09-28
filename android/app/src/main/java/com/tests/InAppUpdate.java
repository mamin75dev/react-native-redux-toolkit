package com.tests;

import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.core.content.FileProvider;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;

public class InAppUpdate extends ReactContextBaseJavaModule {

  private ReactApplicationContext context;
  private final String FILE_NAME = "SampleDownloadApp.apk";
  private final String FILE_BASE_PATH = "file://";
  private final String MIME_TYPE = "application/vnd.android.package-archive";
  private final String PROVIDER_PATH = ".provider";
  private final String APP_INSTALL_PATH = "\"application/vnd.android.package-archive\"";

  InAppUpdate(ReactApplicationContext context) {
    super(context);
    this.context = context;
  }


  @ReactMethod
  public void updateApp(String url) {
    String destination = this.context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS).toString() + "/";
    destination += FILE_NAME;
    Uri uri = Uri.parse(FILE_BASE_PATH + destination);
    File file = new File(destination);
    if (file.exists()) file.delete();
    DownloadManager dm = (DownloadManager) this.context.getSystemService(Context.DOWNLOAD_SERVICE);
    Uri downloadUri = Uri.parse(url);
    DownloadManager.Request request = new DownloadManager.Request(downloadUri);
    request.setMimeType(MIME_TYPE);
    request.setTitle(context.getString(R.string.title_file_download));
    request.setDescription(context.getString(R.string.downloading));
    request.setDestinationUri(uri);
    showInstallOption(destination, uri);
    // Enqueue a new download and same the referenceId
    dm.enqueue(request);
    Toast.makeText(context, context.getString(R.string.downloading), Toast.LENGTH_LONG)
      .show();
  }


  private void showInstallOption(String destination, Uri uri) {
    BroadcastReceiver onComplete = new BroadcastReceiver() {
      @Override
      public void onReceive(Context context, Intent intent) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
          Uri contentUri = FileProvider.getUriForFile(
            context,
            BuildConfig.APPLICATION_ID + PROVIDER_PATH, new File(destination)
          );
          Intent install = new Intent(Intent.ACTION_VIEW);
          install.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
          install.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
          install.putExtra(Intent.EXTRA_NOT_UNKNOWN_SOURCE, true);
          install.setData(contentUri);
          context.startActivity(install);
          context.unregisterReceiver(this);
        } else {
          Intent install = new Intent(Intent.ACTION_VIEW);
          install.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
          install.setDataAndType(
            uri,
            APP_INSTALL_PATH
          );
          context.startActivity(install);
          context.unregisterReceiver(this);
        }
      }
    };
    context.registerReceiver(onComplete, new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE));
  }

  @NonNull
  @Override
  public String getName() {
    return "InAppUpdate";
  }
}
