# Generated by Django 3.2.9 on 2022-05-09 04:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0008_auto_20220417_1138'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='active_state',
        ),
    ]
