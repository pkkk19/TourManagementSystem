# Generated by Django 4.0.3 on 2022-05-01 13:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_alter_packagedaysdetails_package_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='packagedaysdetails',
            name='package_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='base.packages'),
        ),
    ]
