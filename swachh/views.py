import random
import math

from django.shortcuts import render

from swachh.models import Quote


def home(request):
    # ORDER BY RAND(), not effective
    # _quote = Quote.objects.order_by('?').first()

    # not effective too
    # _quote = random.choice(Quote.objects.all())

    # Good way
    max_id = Quote.objects.latest('id').id
    min_id = math.ceil(max_id * random.random())
    _quote = Quote.objects.filter(id__gte=min_id)[0]

    return render(request, 'index.html', {'quote': _quote})
