from django.db import models


class Quote(models.Model):
    class Meta:
        db_table = 'swachh_quote'
        verbose_name = 'Quote'
        verbose_name_plural = 'Quotes'

    quote_text = models.TextField(
        verbose_name='Quote content'
    )

    def __str__(self):
        return self.quote_text
