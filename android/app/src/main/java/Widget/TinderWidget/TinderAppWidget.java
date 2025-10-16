package Widget.TinderWidget;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.widget.RemoteViews;


import com.example.app.MainActivity;
import com.example.app.R;

/**
 * Implementation of App Widget functionality.
 */
public class TinderAppWidget extends AppWidgetProvider {

    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager,
                                int appWidgetId) {


        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.tinder_app_widget);


        appWidgetManager.updateAppWidget(appWidgetId, views);
    }

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        // There may be multiple widgets active, so update all of them
        for (int appWidgetId : appWidgetIds) {
           // updateAppWidget(context, appWidgetManager, appWidgetId);

          Intent intent = new Intent(context, MainActivity.class);

          // FLAG_IMMUTABLE requerido en Android 12+
          PendingIntent pendingIntent = PendingIntent.getActivity(
            context, 0, intent, PendingIntent.FLAG_IMMUTABLE
          );

          RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.tinder_app_widget);
          // Asociar el click del layout a la apertura de la app
          views.setOnClickPendingIntent(R.id.tinder_app, pendingIntent);

          appWidgetManager.updateAppWidget(appWidgetId, views);
        }
    }

    @Override
    public void onEnabled(Context context) {
        // Enter relevant functionality for when the first widget is created
    }

    @Override
    public void onDisabled(Context context) {
        // Enter relevant functionality for when the last widget is disabled
    }
}
