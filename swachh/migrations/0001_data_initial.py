from django.db import migrations

from swachh.models import Quote

# Migration with data to demonstrate the work

quote_list = [
    'walking for 15 min extra',
    'Donating or sharing usable household items.',
    'participating to make my earth green again.',
    'going to aware 5 people to protect our environment.',
    'goint to feed few animals because they are adorable.',
    'taking only the stairs instead of using lifts',
    'planting a tree because they deserve it.',
    'checking the air filter of my car and giving it a clean.',
    'using microfiber cloth to clean my home, instead of chemicals.',
    'saving one litre of extra water !',
    'switching off electric bulb for one hour extra !',
    'going to talk to a old person for a while !',
    'using public transport !',
    'purchaing appropriate reusable container instead of plastics.',
    'using reusable grocery bags rather than plastic bags.',
    'Joining the carpool or public transportation to save fuel because they are too little.',
    'Replaceing regular light bulbs in your home with compact fluorescent bulbs.',
    'Fixing all leaking pipes in my home.',
    'Installing aeration nozzles on all taps to save water.',
    'Cleaning up a local natural resource.'
]


def fill_table(apps, schema_editor):
    for quote in quote_list:
        Quote(quote_text=quote).save()


class Migration(migrations.Migration):
    dependencies = [
        ('swachh', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(fill_table)
    ]
