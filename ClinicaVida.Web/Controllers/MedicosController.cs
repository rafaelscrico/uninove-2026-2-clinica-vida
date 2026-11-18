using Microsoft.AspNetCore.Mvc;
using ClinicaVida.Web.Models;

namespace ClinicaVida.Web.Controllers;

public class MedicosController : Controller
{
    public IActionResult Index(int? especialidadeId)
    {
        var medicos = ClinicaEmMemoria.Medicos.AsEnumerable();

        if (especialidadeId is not null)
        {
            medicos = medicos.Where(
                m => m.EspecialidadeId == especialidadeId
            );
        }

        ViewBag.Especialidades = ClinicaEmMemoria.Especialidades;

        return View(medicos.OrderBy(m => m.Nome).ToList());
    }

    public IActionResult Details(int id)
    {
        var medico = ClinicaEmMemoria.Medicos
            .FirstOrDefault(m => m.Id == id);

        if (medico is null)
        {
            return NotFound();
        }

        var model = new Medico
        {
            Id = medico.Id,
            Nome = medico.Nome,
            Crm = medico.Crm,
            EspecialidadeId = medico.EspecialidadeId,
            Especialidade = ClinicaEmMemoria.Especialidades
                .FirstOrDefault(e => e.Id == medico.EspecialidadeId)
        };

        return View(model);
    }
}